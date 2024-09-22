<?php

namespace App\Actions\Client;

use App\Models\Client;

class CreateClient
{
    public function handle(array $data): Client
    {
        return Client::create($data);
    }
}
