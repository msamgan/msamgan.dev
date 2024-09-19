<?php

namespace App\Http\Controllers;

use App\Actions\Access;
use App\Actions\Notification\NotifyUser;
use App\Actions\Role\CreateRole;
use App\Actions\Role\UpdateRole;
use App\Http\Requests\DeleteRoleRequest;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Models\Role;
use App\Notifications\RoleCreated;
use App\Notifications\RoleDeleted;
use App\Notifications\RoleUpdated;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class RoleController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Role/Index');
    }

    /**
     * @throws Throwable
     */
    public function store(StoreRoleRequest $request, CreateRole $createRole, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();
        try {
            $role = $createRole->handle(name: $request->get('name'));
            $role->syncPermissions($request->get('permissions'));

            $notifyUser->handle(new RoleCreated($request->user(), $role));

            DB::commit();
        } catch (Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function show(Role $role): Role
    {
        Access::businessCheck(businessId: $role->business_id);

        return $role->load('permissions');
    }

    /**
     * @throws Throwable
     */
    public function update(UpdateRoleRequest $request, Role $role, UpdateRole $updateRole, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();
        try {
            $role = $updateRole->handle(role: $role, name: $request->get('name'));
            $role->syncPermissions($request->get('permissions'));

            $notifyUser->handle(new RoleUpdated($request->user(), $role));

            DB::commit();
        } catch (Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    public function destroy(DeleteRoleRequest $request, Role $role, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new RoleDeleted($request->user(), $role));

        $role->delete();
    }

    public function roles(): Collection
    {
        return Role::query()->where('business_id', auth()->user()->business_id)
            ->select('name', 'display_name', 'id')
            ->withCount('users')
            ->get();
    }
}
