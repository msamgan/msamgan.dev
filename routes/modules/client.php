<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('clients', [ClientController::class, 'index'])
        ->middleware([PermissionEnum::ClientList->can()])
        ->name('client.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::post('client/store', [ClientController::class, 'store'])
        ->middleware([PermissionEnum::ClientCreate->can()])
        ->name('client.store');

    Route::post('client/update/{client}', [ClientController::class, 'update'])
        ->middleware([PermissionEnum::ClientUpdate->can()])
        ->name('client.update');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('service/clients', [ClientController::class, 'clients'])
        ->middleware([PermissionEnum::ClientList->can()])
        ->name('service.clients');

    Route::get('service/client/show/{client}', [ClientController::class, 'show'])
        ->middleware([PermissionEnum::ClientUpdate->can()])
        ->name('service.client.show');

    Route::delete('service/client/destroy/{client}', [ClientController::class, 'destroy'])
        ->middleware([PermissionEnum::ClientDelete->can()])
        ->name('service.client.destroy');
});
