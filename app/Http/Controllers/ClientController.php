<?php

namespace App\Http\Controllers;

use App\Actions\Client\CreateClient;
use App\Actions\Client\UpdateClient;
use App\Actions\Notification\NotifyUser;
use App\Http\Requests\DeleteClientRequest;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Models\Client;
use App\Notifications\ClientCreated;
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

            $notifyUser->handle(new ClientCreated(auth()->user(), $client));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function show(Client $client): Client
    {
        $client->load('organization', 'emails', 'phones');

        return $client;
    }

    public function update(UpdateClientRequest $request, Client $client, UpdateClient $updateClient, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $updateClient->handle($client, $request->validated());

            $notifyUser->handle(new ClientUpdated(auth()->user(), $updateClient));

            DB::commit();
        } catch (Exception) {
            DB::rollBack();
        }
    }

    public function destroy(DeleteClientRequest $request, Client $client, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();
        try {
            $client->emails()->delete();
            $client->phones()->delete();

            $notifyUser->handle(new ClientDeleted(auth()->user(), $client));

            $client->delete();

            DB::commit();
        } catch (Exception) {
            DB::rollBack();
        }
    }

    public function clients(): Collection
    {
        return Client::query()
            ->with('organization', 'emails', 'phones')
            ->get();
    }
}
