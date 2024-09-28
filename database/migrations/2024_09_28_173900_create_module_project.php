<?php

use App\Actions\Menu\CreateMenu;
use App\Actions\Permission\AssignPermissionToRole;
use App\Enums\RoleEnum;
use App\Models\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up(): void
    {
        $moduleName = 'Project';
        $menuLabel = 'Project';
        $menuIcon = 'ri-projector-line';

        $parentId = null;

        $newMenuLabel = 'CRM';
        $newMenuIcon = 'ri-bubble-chart-line';

        if (! $parentId) {
            $parentId = ((new CreateMenu)->handle(
                label: $newMenuLabel,
                route: '#',
                icon: $newMenuIcon,
                permission: null,
            ))->id;
        }

        $underscoreCase = Str::of($moduleName)->trim()->snake()->replace(' ', '_')->toString();

        $rolePermissions = [
            'list',
            'create',
            'update',
            'delete',
        ];

        $businessRole = Role::find(RoleEnum::Business->id());

        foreach ($rolePermissions as $permission) {
            (new AssignPermissionToRole)->handle(
                role: $businessRole,
                permission: $permission,
                module: $underscoreCase,
            );
        }

        (new CreateMenu)->handle(
            label: $menuLabel,
            route: $underscoreCase . '.index',
            icon: $menuIcon,
            permission: $underscoreCase . '.list',
            parent: $parentId,
        );
    }

    public function down(): void
    {
        //
    }
};
