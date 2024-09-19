<?php

use App\Enums\RoleEnum;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        $superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'sadmin@perp.com',
            'password' => bcrypt('Pass@123'),
            'email_verified_at' => now(),
            'role_id' => RoleEnum::SuperAdmin->id(),
        ]);

        $superAdmin->assignRole(Role::find(RoleEnum::SuperAdmin->id()));
    }

    public function down(): void
    {
        //
    }
};
