<?php

namespace App\Actions\Menu;

use App\Models\Menu;

class CreateMenu
{
    public function handle(
        string $label,
        string $route,
        string $icon,
        ?string $permission,
        ?int $order = 0,
        ?bool $isActive = true,
        ?string $parent = null
    ): Menu {
        return Menu::create([
            'parent_id' => $parent,
            'label' => $label,
            'route' => $route,
            'icon' => $icon,
            'permission' => $permission,
            'order' => $order,
            'is_active' => $isActive,
        ]);
    }
}
