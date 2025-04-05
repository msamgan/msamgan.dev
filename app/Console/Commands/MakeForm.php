<?php

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

use function Laravel\Prompts\text;

use Throwable;

class MakeForm extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:make-form';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new form File';

    private array $cases = [];

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $moduleName = text(
            label: 'What is Model name?',
            placeholder: 'Support',
            required: true,
            hint: 'Use the same name  as the model name'
        );

        $this->cases = allCases($moduleName);

        try {
            $model = "App\Models\\$moduleName";

            $fillable = (new $model)->getFillable();

            throw_if(empty($fillable), new Exception('You need to define fillable property in the model to generate form'));

            $tableName = (new $model)->getTable();

            throw_unless(DB::table('information_schema.tables')->where('table_name', $tableName)->exists(), new Exception('Table does not exist'));

            // get all the columns of the table with datatype
            $filteredColumns = array_filter(
                DB::select("SHOW COLUMNS FROM $tableName"),
                fn ($column): bool => in_array($column->Field, $fillable)
            );

            $formFields = collect($filteredColumns)->map(fn ($column): array => [
                'name' => $column->Field,
                'type' => str_contains((string) $column->Field, '_id') ? 'select_dependent' : $this->typeCasting($column->Type),
                'required' => $column->Null === 'NO',
            ]);

            $formString = '';
            $dependencyArray = [];
            foreach ($formFields as $field) {
                if (! file_exists(base_path('stubs/Form/' . $field['type'] . '.stub'))) {
                    continue;
                }

                $cases = allCases($field['name']);

                $formString .= $this->replaceCases(
                    file_get_contents(base_path('stubs/Form/' . $field['type'] . '.stub')),
                    array_merge($cases, ['required' => $field['required'] ? 'true' : 'false'])
                );

                if ($field['type'] === 'select_dependent') {
                    $dependencyArray[] = $cases['plural_camel_without_id'];
                    $dependencyArray[] = 'get' . $cases['plural_studly_without_id'];
                }
            }

            $fieldStub = file_get_contents(base_path('stubs/Form/fields.stub'));
            $formString = str_replace('{fieldString}', $formString, $fieldStub);

            $filePath = resource_path("js/Pages/{$this->cases['studly']}/Partials/Fields.jsx");

            file_put_contents($filePath, $formString);

            $this->addDependency($filePath, $dependencyArray);
        } catch (Throwable $th) {
            $this->error($th->getMessage());
        }
    }

    private function typeCasting($type): string
    {
        if (str_contains((string) $type, 'int')) {
            return 'number';
        }

        if (str_contains((string) $type, 'varchar')) {
            return 'text';
        }

        if (str_contains((string) $type, 'text')) {
            return 'textarea';
        }

        if (str_contains((string) $type, 'date')) {
            return 'date';
        }

        if (str_contains((string) $type, 'time')) {
            return 'time';
        }

        if (str_contains((string) $type, 'enum')) {
            return 'select';
        }

        return 'text';
    }

    private function replaceCases(string|bool $fileName, $cases): array|string
    {
        foreach ($cases as $key => $value) {
            $fileName = str_replace("{{$key}}", $value, $fileName);
        }

        return $fileName;
    }

    private function addDependency($filePath, array $dependencies): void
    {
        $fileContent = file_get_contents($filePath);

        $updatedLine = 'export default function Fields({ data, setData, errors, ' . implode(', ', $dependencies) . ' }) {';

        $fileContent = str_replace('export default function Fields({ data, setData, errors }) {', $updatedLine, $fileContent);

        file_put_contents($filePath, $fileContent);
    }
}
