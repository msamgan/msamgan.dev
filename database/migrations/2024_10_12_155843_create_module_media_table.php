<?php

use App\Actions\Menu\CreateMenu;
use App\Actions\Permission\AssignPermissionToRole;
use App\Enums\RoleEnum;
use App\Models\Role;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        $menuIcon = 'ri-image-fill';
        $parentId = 9;

        $businessRole = Role::find(RoleEnum::Business->id());

        collect([
            'list',
            'create',
            'update',
            'delete',
        ])->each(function ($permission) use ($businessRole) {
            (new AssignPermissionToRole)->handle(
                role: $businessRole,
                permission: $permission,
                module: 'media',
            );
        });

        (new CreateMenu)->handle(
            label: 'Media',
            route: 'media' . '.index',
            icon: $menuIcon,
            permission: 'media' . '.list',
            parent: $parentId,
        );
    }

    public function down(): void
    {
        //
    }
};
