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

            if (empty($fillable)) {
                throw new Exception('You need to define fillable property in the model to generate form');
            }

            $tableName = (new $model)->getTable();

            // get all the columns of the table with datatype
            $filteredColumns = array_filter(
                DB::select("SHOW COLUMNS FROM $tableName"),
                function ($column) use ($fillable) {
                    return in_array($column->Field, $fillable);
                }
            );

            $formFields = collect($filteredColumns)->map(function ($column) {
                return [
                    'name' => $column->Field,
                    'type' => $this->typeCasting($column->Type),
                    'required' => $column->Null === 'NO',
                ];
            });

            $formString = '';
            foreach ($formFields as $field) {
                $formString .= $this->replaceCases(
                    file_get_contents(base_path('stubs/Form/' . $field['type'] . '.stub')),
                    array_merge(
                        allCases($field['name']),
                        ['required' => $field['required'] ? 'true' : 'false']
                    )
                );
            }

            $fieldStub = file_get_contents(base_path('stubs/Form/fields.stub'));
            $formString = str_replace('{fieldString}', $formString, $fieldStub);

            file_put_contents(resource_path("js/Pages/{$this->cases['studly']}/Partials/Fields.jsx"), $formString);

        } catch (Throwable $th) {
            $this->error($th->getMessage());
        }
    }

    private function typeCasting($type): string
    {
        if (str_contains($type, 'int')) {
            return 'number';
        }

        if (str_contains($type, 'varchar')) {
            return 'text';
        }

        if (str_contains($type, 'text')) {
            return 'textarea';
        }

        if (str_contains($type, 'date')) {
            return 'date';
        }

        if (str_contains($type, 'time')) {
            return 'time';
        }

        if (str_contains($type, 'enum')) {
            return 'select';
        }

        return 'text';
    }

    private function replaceCases($fileName, $cases): array|string
    {
        foreach ($cases as $key => $value) {
            $fileName = str_replace("{{$key}}", $value, $fileName);
        }

        return $fileName;
    }
}
