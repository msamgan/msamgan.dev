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
        $moduleName = 'Transaction';
        $menuLabel = 'Transactions';
        $menuIcon = 'ri-arrow-left-right-fill';

        $parentId = null;

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
