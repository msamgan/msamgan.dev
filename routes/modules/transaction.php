<?php

use App\Enums\PermissionEnum;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('transactions', [TransactionController::class, 'index'])
        ->middleware([PermissionEnum::TransactionList->can()])
        ->name('transaction.index');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::post('transaction/store', [TransactionController::class, 'store'])
        ->middleware([PermissionEnum::TransactionCreate->can()])
        ->name('transaction.store');
});

Route::middleware(['auth', 'check_has_business'])->group(function (): void {
    Route::get('service/transactions', [TransactionController::class, 'transactions'])
        ->middleware([PermissionEnum::TransactionList->can()])
        ->name('service.transactions');

    Route::get('service/transaction/descriptions', [TransactionController::class, 'descriptions'])
        ->middleware([PermissionEnum::TransactionList->can()])
        ->name('service.transaction.descriptions');
});
