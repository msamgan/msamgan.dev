<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('roles', [RoleController::class, 'index'])
        ->middleware([PermissionEnum::RoleList->can()])
        ->name('role.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::post('role/store', [RoleController::class, 'store'])
        ->middleware([PermissionEnum::RoleCreate->can()])
        ->name('role.store');

    Route::post('role/update/{role}', [RoleController::class, 'update'])
        ->middleware([PermissionEnum::RoleUpdate->can()])
        ->name('role.update');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('service/roles', [RoleController::class, 'roles'])
        ->middleware([PermissionEnum::RoleList->can()])
        ->name('service.roles');

    Route::get('service/role/show/{role}', [RoleController::class, 'show'])
        ->middleware([PermissionEnum::RoleUpdate->can()])
        ->name('service.role.show');

    Route::delete('service/role/destroy/{role}', [RoleController::class, 'destroy'])
        ->middleware([PermissionEnum::RoleDelete->can()])
        ->name('service.role.destroy');
});
