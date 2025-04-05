<?php

namespace App\Actions\Client;

use App\Models\Client;

class CreateClient
{
    public function handle(array $data): Client
    {
        $client = Client::query()->create([
            'name' => ucfirst((string) $data['name']),
            'organization_id' => $data['organization_id'] ?? null,
        ]);

        if ($data['emails']) {
            $emails = explode(',', (string) $data['emails']);
            $this->storeEmails($client, $emails);
        }

        if ($data['phones']) {
            $phones = explode(',', (string) $data['phones']);
            $this->storePhones($client, $phones);
        }

        return $client;
    }

    public function storeEmails(Client $client, array $emails): void
    {
        $emails = array_map(fn ($email): array => ['email' => strtolower(trim((string) $email))], $emails);

        $client->emails()->createMany($emails);
    }

    public function storePhones(Client $client, array $phones): void
    {
        $phones = array_map(fn ($phone): array => ['phone' => trim((string) $phone)], $phones);

        $client->phones()->createMany($phones);
    }
}
