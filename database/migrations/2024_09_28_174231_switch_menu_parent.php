<?php

use App\Models\Menu;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        $itemsToMove = ['Client', 'Organization'];
        $parentId = Menu::query()->where('label', 'CRM')->first()->id;

        foreach ($itemsToMove as $item) {
            $menu = Menu::query()->where('label', $item)->first();
            $menu->parent_id = $parentId;
            $menu->save();
        }
    }

    public function down(): void
    {
        //
    }
};
