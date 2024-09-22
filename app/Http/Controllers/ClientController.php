<?php

namespace App\Http\Controllers;

use App\Actions\Client\CreateClient;
use App\Actions\Client\UpdateClient;
use App\Actions\Notification\NotifyUser;
// use App\Http\Requests\DeleteClientRequest;
use App\Http\Requests\DeleteClientRequest;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Models\Client;
use App\Notifications\ClientCreated;
// use App\Notifications\ClientDeleted;
use App\Notifications\ClientDeleted;
use App\Notifications\ClientUpdated;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Client/Index');
    }

    /**
     * @throws Exception
     */
    public function store(StoreClientRequest $request, CreateClient $createClient, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $client = $createClient->handle($request->validated());

            $notifyUser->handle(new ClientCreated(auth()->user()));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function show(Client $client): Client
    {
        // Access::businessCheck(businessId: $user->business_id);
        $client->load('organization', 'emails', 'phones');

        return $client;
    }

    public function update(UpdateClientRequest $request, Client $client, UpdateClient $updateClient, NotifyUser $notifyUser): void
    {
        $updateClient->handle($client, $request->validated());

        $notifyUser->handle(new ClientUpdated(auth()->user()));
    }

    public function destroy(DeleteClientRequest $request, Client $client, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new ClientDeleted(auth()->user(), $client));

        $client->delete();
    }

    public function clients(): Collection
    {
        return Client::query()
            ->with('organization', 'emails', 'phones')
            ->get();
    }
}
