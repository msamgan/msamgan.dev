<?php

namespace App\Actions\Role;

use App\Models\Role;
use App\Models\User;

class AssignRole
{
    public function handle(User $user, Role $role, bool $makeRoleActive = false): void
    {
        $user->assignRole($role);

        if ($makeRoleActive) {
            $user->role_id = $role->id;
            $user->save();
        }
    }
}
