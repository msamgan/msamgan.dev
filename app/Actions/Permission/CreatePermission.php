<?php

namespace App\Actions\Permission;

use App\Enums\RoleEnum;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class CreatePermission
{
    public function handle(string $permission, string $module): void
    {
        $permissionName = $module . '.' . $permission;

        Permission::create(['name' => $permissionName]);

        // when ever you create a new permission, you can assign it to super admin Role.
        (new AssignPermissionToRole)->handle(
            role: Role::query()->where('display_name', RoleEnum::SuperAdmin->value)->first(),
            permission: $permission,
            module: $module
        );
    }
}
