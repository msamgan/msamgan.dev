<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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

        $cases = allCases($moduleName);

        try {
            $model = "App\Models\\$moduleName";

            $fillable = (new $model)->getFillable();

            $tableName = (new $model)->getTable();
            $singular = Str::singular($tableName);
            $functionCase = Str::camel($singular);
            $classCase = Str::studly($singular);

            // get all the columns of the table with datatype
            $columns = DB::select("SHOW COLUMNS FROM $tableName");
            $filteredColumns = array_filter($columns, function ($column) use ($fillable) {
                return in_array($column->Field, $fillable);
            });

            $formFields = collect($filteredColumns)->map(function ($column) {
                return [
                    'name' => $column->Field,
                    'type' => $this->typeCasting($column->Type),
                    'required' => $column->Null === 'NO',
                ];
            });

            $formString = '';
            foreach ($formFields as $field) {
                if ($field['type'] === 'text') {
                    $textStub = file_get_contents(base_path('stubs/Form/text.stub'));
                    $formString .= str_replace(['{columnName}', '{required}', '{columnNameUcFirst}'], [
                        $field['name'],
                        $field['required'] ? 'true' : 'false',
                        ucfirst($field['name']),
                    ], $textStub);

                    continue;
                }
            }

            // dd($formString);

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
}
