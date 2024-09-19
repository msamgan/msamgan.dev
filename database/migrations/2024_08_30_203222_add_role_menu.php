<?php

use App\Actions\Menu\CreateMenu;
use App\Enums\PermissionEnum;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        $userManagement = (new CreateMenu)->handle(
            label: 'User Management',
            route: '#',
            icon: 'ri-user-settings-line',
            permission: null
        );

        (new CreateMenu)->handle(
            label: 'Roles',
            route: 'role.index',
            icon: 'ri-shield-user-line',
            permission: PermissionEnum::RoleList->value,
            parent: $userManagement->id
        );

        (new CreateMenu)->handle(
            label: 'Users',
            route: 'user.index',
            icon: 'ri-user-3-line',
            permission: PermissionEnum::UserList->value,
            parent: $userManagement->id
        );
    }

    public function down(): void
    {
        //
    }
};
