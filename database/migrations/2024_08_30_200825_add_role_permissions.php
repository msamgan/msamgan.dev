<?php

use App\Actions\Permission\AssignPermissionToRole;
use App\Enums\RoleEnum;
use App\Models\Role;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
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
                module: 'role'
            );
        }

        foreach ($rolePermissions as $permission) {
            (new AssignPermissionToRole)->handle(
                role: $businessRole,
                permission: $permission,
                module: 'user'
            );
        }
    }

    public function down(): void
    {
        //
    }
};
