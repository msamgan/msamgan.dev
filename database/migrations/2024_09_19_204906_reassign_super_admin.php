<?php

use App\Actions\Business\CreateBusiness;
use App\Actions\Role\AssignRole;
use App\Enums\RoleEnum;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        $myUser = User::query()->where('email', 'mail@msamgan.com')->first();

        if (! $myUser) {
            $myUser = User::query()->create([
                'name' => 'Mohammed Samgan Khan',
                'email' => 'mail@msamgan.com',
                'password' => bcrypt('Pass@123'),
                'email_verified_at' => now(),
            ]);
        }

        (new AssignRole)->handle($myUser, RoleEnum::SuperAdmin->role(), true);
        (new CreateBusiness)->handle($myUser, 'Freelance', true);

        $myUser->update(['email_verified_at' => now()]);

        // delete the second super admin
        User::query()->where('email', 'sadmin@perp.com')->delete();
    }

    public function down(): void
    {
        //
    }
};
