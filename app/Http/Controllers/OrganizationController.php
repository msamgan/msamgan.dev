<?php

namespace App\Http\Controllers;

use App\Actions\Access;
use App\Actions\Notification\NotifyUser;
use App\Actions\Organization\CreateOrganization;
use App\Actions\Organization\UpdateOrganization;
use App\Http\Requests\DeleteOrganizationRequest;
use App\Http\Requests\StoreOrganizationRequest;
use App\Http\Requests\UpdateOrganizationRequest;
use App\Models\Organization;
use App\Notifications\OrganizationCreated;
use App\Notifications\OrganizationDeleted;
use App\Notifications\OrganizationUpdated;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Organization/Index');
    }

    /**
     * @throws Exception
     */
    public function store(StoreOrganizationRequest $request, CreateOrganization $createOrganization, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $organization = $createOrganization->handle($request->validated());

            $notifyUser->handle(new OrganizationCreated(auth()->user(), $organization));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function show(Organization $organization): Organization
    {
        Access::businessCheck(businessId: auth()->user()->business_id);

        return $organization;
    }

    public function update(UpdateOrganizationRequest $request, Organization $organization, UpdateOrganization $updateOrganization, NotifyUser $notifyUser): void
    {
        $updateOrganization->handle($organization, $request->validated());

        $notifyUser->handle(new OrganizationUpdated(auth()->user(), $updateOrganization));
    }

    public function destroy(DeleteOrganizationRequest $request, Organization $organization, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new OrganizationDeleted(auth()->user(), $organization));

        $organization->delete();
    }

    public function organizations(): Collection
    {
        return Organization::query()->get();
    }
}
