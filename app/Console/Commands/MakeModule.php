<?php

namespace App\Console\Commands;

use App\Models\Menu;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;

use function Laravel\Prompts\select;
use function Laravel\Prompts\text;

class MakeModule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:make-module';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new module';

    protected array $cases = [];

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $moduleName = text(
            label: 'What is Module"s name?',
            placeholder: 'Support',
            required: true,
            hint: 'Use the same format as used while creating a model (CamelCase)',
        );

        $menuIcon = text(
            label: 'What is the icon for the menu?',
            placeholder: 'ri-user-settings-line',
            required: true,
            hint: 'We are using Remix Icon, you can find the icon name here: https://remixicon.com/',
        );

        $parentManuOptions = select(
            label: 'Select the parent menu',
            options: [
                1 => 'None',
                2 => 'New',
                3 => 'Existing',
            ],
            required: true,
        );

        $newMenuLabel = null;
        $newMenuIcon = null;

        $parentId = null;
        if ($parentManuOptions === 2) {

            $newMenuLabel = text(
                label: 'What is the label for the New Parent Menu?',
                placeholder: 'User Management',
                required: true,
            );

            $newMenuIcon = text(
                label: 'What is the icon for the New Parent Menu?',
                placeholder: 'ri-user-settings-line',
                required: true,
                hint: 'We are using Remix Icon, you can find the icon name here: https://remixicon.com/',
            );

        } elseif ($parentManuOptions === 3) {
            $parentId = select(
                label: 'Select the parent menu',
                options: Menu::query()->whereNull('parent_id')->get()->pluck('label', 'id')->toArray(),
                required: true,
            );
        }

        $this->cases = allCases($moduleName);

        $classCase = Str::of($moduleName)->trim()->title()->replace(' ', '')->toString();
        $classCasePlural = Str::of($moduleName)->trim()->title()->plural()->replace(' ', '')->toString();
        $underscoreCase = Str::of($moduleName)->trim()->snake()->replace(' ', '_')->toString();
        $underscoreCasePlural = Str::of($moduleName)->trim()->snake()->plural()->replace(' ', '_')->toString();

        $this->info("Creating module: {$moduleName}");

        Artisan::call('make:model', [
            'name' => $this->cases['studly'],
            '--all' => true,
        ]);

        $this->createRoutes();

        $this->createNotifications();

        sleep(2);

        $this->createModuleMigration(
            $menuIcon,
            $parentId,
            $newMenuLabel,
            $newMenuIcon
        );

        $this->createActions();

        $this->replaceController();

        $this->createView(
            $classCase,
            $classCasePlural,
            $underscoreCase,
            $underscoreCasePlural
        );

        $this->createPermission($underscoreCase, $classCase);

        $this->createService($underscoreCase, $underscoreCasePlural);

        $this->createRoutesJs($underscoreCase);

        $this->info("Module: {$moduleName} created successfully");

        $this->info('To Do:');
        $this->info('1. Update the migrations for the module table.');
        $this->info('4. Run the Migrations.');
    }

    private function createRoutes(): void
    {
        $routeStubFile = $this->replaceCases(file_get_contents(base_path('stubs/module.route.stub')));

        file_put_contents(base_path("routes/modules/{$this->cases['snake']}.php"), $routeStubFile);
    }

    private function replaceCases($fileName): array|string
    {
        foreach ($this->cases as $key => $value) {
            $fileName = str_replace("{{$key}}", $value, $fileName);
        }

        return $fileName;
    }

    private function createNotifications(): void
    {
        collect([
            'Created',
            'Updated',
            'Deleted',
        ])->each(function ($notification) {
            $notificationStubFile = file_get_contents(base_path('stubs/module.notification.stub'));
            $notificationName = "{$this->cases['studly']}{$notification}";
            $notificationStubFile = str_replace('{notificationName}', $notificationName, $notificationStubFile);
            file_put_contents(app_path("Notifications/{$notificationName}.php"), $notificationStubFile);
        });
    }

    private function createModuleMigration(
        string $menuIcon,
        ?string $parentId,
        ?string $newMenuLabel,
        ?string $newMenuIcon
    ): void {
        $migrationStubFile = file_get_contents(base_path('stubs/module.migration.stub'));

        $migrationStubFile = $this->replaceCases($migrationStubFile);

        $migrationStubFile = str_replace('{parentId}', $parentId, $migrationStubFile);
        $migrationStubFile = str_replace('{menuIcon}', $menuIcon, $migrationStubFile);
        $migrationStubFile = str_replace('{newMenuLabel}', $newMenuLabel, $migrationStubFile);
        $migrationStubFile = str_replace('{newMenuIcon}', $newMenuIcon, $migrationStubFile);

        $timestamp = now()->format('Y_m_d_His');

        file_put_contents(database_path("migrations/{$timestamp}_create_module_{$this->cases['snake']}_table.php"), $migrationStubFile);
    }

    private function createActions(): void
    {
        collect([
            'create',
            'update',
        ])->each(function ($action) {
            $actionStubFile = file_get_contents(base_path('stubs/module.' . $action . '.action.stub'));
            $actionStubFile = $this->replaceCases($actionStubFile);

            if (! is_dir(app_path("Actions/{$this->cases['studly']}"))) {
                mkdir(app_path("Actions/{$this->cases['studly']}"));
            }

            $fileName = ucfirst($action) . $this->cases['studly'];

            file_put_contents(app_path("Actions/{$this->cases['studly']}/{$fileName}.php"), $actionStubFile);
        });
    }

    private function replaceController(): void
    {
        $controllerStubFile = file_get_contents(base_path('stubs/module.controller.stub'));
        $controllerStubFile = $this->replaceCases($controllerStubFile);
        file_put_contents(app_path("Http/Controllers/{$this->cases['studly']}Controller.php"), $controllerStubFile);
    }

    private function createView(
        string $classCase,
        string $classCasePlural,
        string $underscoreCase,
        string $underscoreCasePlural,
    ): void {
        $viewHelperStubFile = file_get_contents(base_path('stubs/module.view.helper.stub'));
        $viewFormStubFile = file_get_contents(base_path('stubs/module.view.form.stub'));
        $viewIndexStubFile = file_get_contents(base_path('stubs/module.view.index.stub'));

        $viewHelperStubFile = str_replace('{classCase}', $classCase, $viewHelperStubFile);
        $viewHelperStubFile = str_replace('{classCasePlural}', $classCasePlural, $viewHelperStubFile);
        $viewHelperStubFile = str_replace('{underscoreCase}', $underscoreCase, $viewHelperStubFile);
        $viewHelperStubFile = str_replace('{underscoreCasePlural}', $underscoreCasePlural, $viewHelperStubFile);

        $viewFormStubFile = str_replace('{classCase}', $classCase, $viewFormStubFile);
        $viewFormStubFile = str_replace('{classCasePlural}', $classCasePlural, $viewFormStubFile);
        $viewFormStubFile = str_replace('{underscoreCase}', $underscoreCase, $viewFormStubFile);
        $viewFormStubFile = str_replace('{underscoreCasePlural}', $underscoreCasePlural, $viewFormStubFile);

        $viewIndexStubFile = str_replace('{classCase}', $classCase, $viewIndexStubFile);
        $viewIndexStubFile = str_replace('{classCasePlural}', $classCasePlural, $viewIndexStubFile);
        $viewIndexStubFile = str_replace('{underscoreCase}', $underscoreCase, $viewIndexStubFile);
        $viewIndexStubFile = str_replace('{underscoreCasePlural}', $underscoreCasePlural, $viewIndexStubFile);

        // check if the directory exists
        if (! is_dir(resource_path("js/Pages/{$classCase}"))) {
            mkdir(resource_path("js/Pages/{$classCase}"));
        }

        if (! is_dir(resource_path("js/Pages/{$classCase}/Partials"))) {
            mkdir(resource_path("js/Pages/{$classCase}/Partials"));
        }

        file_put_contents(resource_path("js/Pages/{$classCase}/helper.js"), $viewHelperStubFile);
        file_put_contents(resource_path("js/Pages/{$classCase}/Partials/Form.jsx"), $viewFormStubFile);
        file_put_contents(resource_path("js/Pages/{$classCase}/Index.jsx"), $viewIndexStubFile);
    }

    private function createPermission(
        string $underscoreCase,
        string $classCase,
    ): void {
        // JS Part..
        $permissionStubFile = file_get_contents(base_path('stubs/module.permission.stub'));

        $permissionStubFile = str_replace('{underscoreCase}', $underscoreCase, $permissionStubFile);

        file_put_contents(resource_path("js/Utils/permissions/{$underscoreCase}.js"), $permissionStubFile);

        $permissionImport = "import { {$underscoreCase} } from '@/Utils/permissions/{$underscoreCase}.js';";
        $addStatement = "    $underscoreCase,";

        $fileLines = file(resource_path('js/Utils/permissions/index.js'));

        foreach ($fileLines as $key => $line) {
            if ($line === "\n") {
                $fileLines[$key] = $permissionImport . "\n";
                array_splice($fileLines, $key + 1, 0, "\n");
            }
        }

        array_splice($fileLines, count($fileLines) - 1, 0, $addStatement . "\n");

        file_put_contents(resource_path('js/Utils/permissions/index.js'), implode('', $fileLines));

        // PHP Part..
        $permissionEnumFile = file(app_path('Enums/PermissionEnum.php'));

        $newPermission = "    case {$classCase}List = '{$underscoreCase}.list';\n";
        $newPermission .= "    case {$classCase}Create = '{$underscoreCase}.create';\n";
        $newPermission .= "    case {$classCase}Update = '{$underscoreCase}.update';\n";
        $newPermission .= "    case {$classCase}Delete = '{$underscoreCase}.delete';\n";
        $newPermission .= "\n";

        $newPermissionCan = "\n";
        $newPermissionCan .= "            self::{$classCase}List => 'can:{$underscoreCase}.list',\n";
        $newPermissionCan .= "            self::{$classCase}Create => 'can:{$underscoreCase}.create',\n";
        $newPermissionCan .= "            self::{$classCase}Update => 'can:{$underscoreCase}.update',\n";
        $newPermissionCan .= "            self::{$classCase}Delete => 'can:{$underscoreCase}.delete',\n";

        foreach ($permissionEnumFile as $key => $line) {
            if (str_starts_with($line, '{')) {
                array_splice($permissionEnumFile, $key + 1, 0, $newPermission);
            }

            if (str_ends_with(trim($line), '};')) {
                array_splice($permissionEnumFile, $key + 1, 0, $newPermissionCan);
            }
        }

        file_put_contents(app_path('Enums/PermissionEnum.php'), implode('', $permissionEnumFile));
    }

    private function createService(
        string $underscoreCase,
        string $underscoreCasePlural,
    ): void {
        $serviceStubFile = file_get_contents(base_path('stubs/module.service.stub'));

        $serviceStubFile = str_replace('{underscoreCase}', $underscoreCase, $serviceStubFile);
        $serviceStubFile = str_replace('{underscoreCasePlural}', $underscoreCasePlural, $serviceStubFile);

        file_put_contents(resource_path("js/Utils/services/{$underscoreCase}.js"), $serviceStubFile);

        $serviceImport = "import { {$underscoreCase} } from '@/Utils/services/{$underscoreCase}.js';";
        $addStatement = "    $underscoreCase,";

        $fileLines = file(resource_path('js/Utils/services/index.js'));

        foreach ($fileLines as $key => $line) {
            if ($line === "\n") {
                $fileLines[$key] = $serviceImport . "\n";
                array_splice($fileLines, $key + 1, 0, "\n");
            }
        }

        array_splice($fileLines, count($fileLines) - 1, 0, $addStatement . "\n");

        file_put_contents(resource_path('js/Utils/services/index.js'), implode('', $fileLines));
    }

    private function createRoutesJs(
        string $underscoreCase,
    ): void {
        $routesJsStubFile = file_get_contents(base_path('stubs/module.route.js.stub'));

        $routesJsStubFile = str_replace('{underscoreCase}', $underscoreCase, $routesJsStubFile);

        file_put_contents(resource_path("js/Utils/routes/{$underscoreCase}.js"), $routesJsStubFile);

        $routeImport = "import { {$underscoreCase} } from '@/Utils/routes/{$underscoreCase}.js';";
        $addStatement = "    $underscoreCase,";

        $fileLines = file(resource_path('js/Utils/routes/index.js'));

        foreach ($fileLines as $key => $line) {
            if ($line === "\n") {
                $fileLines[$key] = $routeImport . "\n";
                array_splice($fileLines, $key + 1, 0, "\n");
            }
        }

        array_splice($fileLines, count($fileLines) - 1, 0, $addStatement . "\n");

        file_put_contents(resource_path('js/Utils/routes/index.js'), implode('', $fileLines));
    }
}
