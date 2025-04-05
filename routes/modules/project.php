<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('projects', [ProjectController::class, 'index'])
        ->middleware([PermissionEnum::ProjectList->can()])
        ->name('project.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::post('project/store', [ProjectController::class, 'store'])
        ->middleware([PermissionEnum::ProjectCreate->can()])
        ->name('project.store');

    Route::post('project/update/{project}', [ProjectController::class, 'update'])
        ->middleware([PermissionEnum::ProjectUpdate->can()])
        ->name('project.update');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('service/projects', [ProjectController::class, 'projects'])
        ->middleware([PermissionEnum::ProjectList->can()])
        ->name('service.projects');

    Route::get('service/project/show/{project}', [ProjectController::class, 'show'])
        ->middleware([PermissionEnum::ProjectUpdate->can()])
        ->name('service.project.show');

    Route::delete('service/project/destroy/{project}', [ProjectController::class, 'destroy'])
        ->middleware([PermissionEnum::ProjectDelete->can()])
        ->name('service.project.destroy');
});
