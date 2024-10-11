<?php

namespace App\Actions\Client;

use App\Models\Client;

class UpdateClient
{
    public function handle(Client $client, array $data): Client
    {
        $client->update(['name' => ucfirst($data['name']), 'organization_id' => $data['organization_id'] ?? null]);

        $createClient = new CreateClient;

        if ($data['emails']) {
            $client->emails()->delete();
            $emails = explode(',', $data['emails']);

            $createClient->storeEmails($client, $emails);
        }

        if ($data['phones']) {
            $client->phones()->delete();
            $phones = explode(',', $data['phones']);

            $createClient->storePhones($client, $phones);
        }

        return $client->refresh()->load('emails', 'phones');
    }
}
