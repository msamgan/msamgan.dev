<?php

namespace App\Actions\Client;

use App\Models\Client;

class CreateClient
{
    public function handle(array $data): Client
    {
        $client = Client::create([
            'name' => ucfirst($data['name']),
            'organization_id' => $data['organization_id'] ?? null,
        ]);

        if ($data['emails']) {
            $emails = explode(',', $data['emails']);
            $this->storeEmails($client, $emails);
        }

        if ($data['phones']) {
            $phones = explode(',', $data['phones']);
            $this->storePhones($client, $phones);
        }

        return $client;
    }

    public function storeEmails(Client $client, array $emails): void
    {
        $emails = array_map(function ($email) {
            return ['email' => strtolower(trim($email))];
        }, $emails);

        $client->emails()->createMany($emails);
    }

    public function storePhones(Client $client, array $phones): void
    {
        $phones = array_map(function ($phone) {
            return ['phone' => trim($phone)];
        }, $phones);

        $client->phones()->createMany($phones);
    }
}
