<?php

namespace App\Actions\Permission;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AssignPermissionToRole
{
    public function handle(Role $role, string $permission, string $module): void
    {
        $permissionName = $module . '.' . $permission;

        $permissionExists = Permission::query()->where('name', $permissionName)->exists();
        if (! $permissionExists) {
            (new CreatePermission)->handle(permission: $permission, module: $module);
        }

        $role->givePermissionTo($permissionName);
    }
}
