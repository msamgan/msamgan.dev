<?php

namespace App\Http\Controllers;

use App\Actions\Access;
use App\Actions\Notification\NotifyUser;
use App\Actions\Role\AssignRole;
use App\Http\Requests\DeleteUserRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Role;
use App\Models\User;
use App\Notifications\UserCreated;
use App\Notifications\UserDeleted;
use App\Notifications\UserUpdated;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('User/Index');
    }

    /**
     * @throws Exception
     */
    public function store(StoreUserRequest $request, AssignRole $assignRole, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $user = User::query()->create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => bcrypt($request->get('password')),
                'business_id' => auth()->user()->business_id,
            ]);

            $role = Role::find($request->get('role'));

            $assignRole->handle(user: $user, role: $role, makeRoleActive: true);

            $notifyUser->handle(new UserCreated(auth()->user(), $user, $role));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function show(User $user): User
    {
        Access::businessCheck(businessId: $user->business_id);

        return $user->load('role');
    }

    public function update(UpdateUserRequest $request, User $user, NotifyUser $notifyUser): void
    {
        if ($request->get('password')) {
            $request->merge(['password' => bcrypt($request->get('password'))]);
        } else {
            $request->request->remove('password');
        }

        $user->update($request->validated());

        $notifyUser->handle(new UserUpdated(auth()->user(), $user));
    }

    public function destroy(DeleteUserRequest $request, User $user, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new UserDeleted(auth()->user(), $user));

        $user->delete();
    }

    public function users(): Collection
    {
        return User::query()->where('business_id', auth()->user()->business_id)
            ->where('id', '!=', auth()->id())
            ->with(['roles'])
            ->get();
    }
}
