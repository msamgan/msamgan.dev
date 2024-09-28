<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('transactions', [TransactionController::class, 'index'])
        ->middleware([PermissionEnum::TransactionList->can()])
        ->name('transaction.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::post('transaction/store', [TransactionController::class, 'store'])
        ->middleware([PermissionEnum::TransactionCreate->can()])
        ->name('transaction.store');

    Route::post('transaction/update/{transaction}', [TransactionController::class, 'update'])
        ->middleware([PermissionEnum::TransactionUpdate->can()])
        ->name('transaction.update');
});

Route::middleware(['auth', 'check_has_business'])->group(function () {
    Route::get('service/transactions', [TransactionController::class, 'transactions'])
        ->middleware([PermissionEnum::TransactionList->can()])
        ->name('service.transactions');

    Route::get('service/transaction/show/{transaction}', [TransactionController::class, 'show'])
        ->middleware([PermissionEnum::TransactionUpdate->can()])
        ->name('service.transaction.show');

    Route::delete('service/transaction/destroy/{transaction}', [TransactionController::class, 'destroy'])
        ->middleware([PermissionEnum::TransactionDelete->can()])
        ->name('service.transaction.destroy');
});
