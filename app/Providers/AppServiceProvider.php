<?php

namespace App\Providers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Override;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    #[Override]
    public function register(): void
    {
        $this->autoloadRoutes();
    }

    public function autoloadRoutes(): void
    {
        foreach (File::allFiles(base_path(ROUTE_MODULE_DIR)) as $file) {
            Route::middleware(['web'])->group(function () use ($file): void {
                $this->loadRoutesFrom(base_path(ROUTE_MODULE_DIR) . $file->getFilename());
            });
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
