<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\OrganizationController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('organizations', [OrganizationController::class, 'index'])
        ->middleware([PermissionEnum::OrganizationList->can()])
        ->name('organization.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::post('organization/store', [OrganizationController::class, 'store'])
        ->middleware([PermissionEnum::OrganizationCreate->can()])
        ->name('organization.store');

    Route::post('organization/update/{organization}', [OrganizationController::class, 'update'])
        ->middleware([PermissionEnum::OrganizationUpdate->can()])
        ->name('organization.update');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('service/organizations', [OrganizationController::class, 'organizations'])
        ->middleware([PermissionEnum::OrganizationList->can()])
        ->name('service.organizations');

    Route::get('service/organization/show/{organization}', [OrganizationController::class, 'show'])
        ->middleware([PermissionEnum::OrganizationUpdate->can()])
        ->name('service.organization.show');

    Route::delete('service/organization/destroy/{organization}', [OrganizationController::class, 'destroy'])
        ->middleware([PermissionEnum::OrganizationDelete->can()])
        ->name('service.organization.destroy');
});
