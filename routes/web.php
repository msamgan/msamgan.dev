<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => redirect('login'))->name('welcome');

Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

$moduleRoutesDir = 'routes/modules/';
foreach (File::allFiles(base_path($moduleRoutesDir)) as $file) {
    require base_path($moduleRoutesDir) . $file->getFilename();
}
