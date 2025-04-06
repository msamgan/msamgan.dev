<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Route;

class BuildActions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:build-actions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Build Actions from the get URLs';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $routes = $this->getRequiredUrls();

        foreach ($routes as $route) {
            $usesFragments = explode('\\', $route->getAction()['uses']);
            $lastFragment = array_pop($usesFragments);

            $fileFragments = explode('@', $lastFragment);
            $fileName = $fileFragments[0];
            $methodName = $fileFragments[1];

            $filePath = $this->ensureJsFileExists($fileName);
            $methodString = $this->createMethodString($route->getName(), $methodName);

            $this->appendToFileWithEmptyLine($filePath, $methodString);
        }
    }

    private function appendToFileWithEmptyLine(string $filePath, string $content): void
    {
        if (! str_contains(file_get_contents($filePath), $content)) {
            // Append the content followed by an empty line
            file_put_contents($filePath, $content . PHP_EOL . PHP_EOL, FILE_APPEND);
        }
    }

    private function createMethodString($routeName, $methodName): string
    {
        $baseString = "export const {{methodName}} = () => {\n\treturn axios.get(route('{{routeName}}')).then(response => response)\n}";

        $functionString = str_replace('{{methodName}}', $methodName, $baseString);

        return str_replace('{{routeName}}', $routeName, $functionString);
    }

    private function ensureActionsDirectoryExists(): void
    {
        $directory = resource_path('actions');

        if (! is_dir($directory)) {
            mkdir($directory, 0755, true);
        }
    }

    private function ensureJsFileExists(string $fileName): string
    {
        $this->ensureActionsDirectoryExists();

        $filePath = resource_path('actions/' . $fileName . '.js');

        if (! file_exists($filePath)) {
            file_put_contents($filePath, '// Action file: ' . $fileName . PHP_EOL);
        }

        return $filePath;
    }

    private function getRequiredUrls(): array
    {
        $urls = [];
        foreach (Route::getRoutes() as $route) {
            if ($route->getPrefix() == 'action') {
                $urls[] = $route;
            }
        }

        return $urls;
    }
}
