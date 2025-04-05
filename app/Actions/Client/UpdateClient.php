<?php

namespace App\Actions\Client;

use App\Models\Client;

class UpdateClient extends Client
{
    public function handle(Client $client, array $data): Client
    {
        $client->update(['name' => ucfirst((string) $data['name']), 'organization_id' => $data['organization_id'] ?? null]);

        $createClient = new CreateClient;

        if ($data['emails']) {
            $client->emails()->delete();
            $emails = explode(',', (string) $data['emails']);

            $createClient->storeEmails($client, $emails);
        }

        if ($data['phones']) {
            $client->phones()->delete();
            $phones = explode(',', (string) $data['phones']);

            $createClient->storePhones($client, $phones);
        }

        return $client->refresh()->load('emails', 'phones');
    }
}
