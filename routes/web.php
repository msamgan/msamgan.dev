<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => redirect('login'))->name('welcome');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

$moduleRoutesDir = 'routes/modules/';
foreach (File::allFiles(base_path($moduleRoutesDir)) as $file) {
    require base_path($moduleRoutesDir) . $file->getFilename();
}
