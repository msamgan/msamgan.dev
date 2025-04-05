<?php

namespace App\Actions\Transaction;

use App\Models\Transaction;
use Carbon\Carbon;

class CreateTransaction
{
    public function handle(array $data): Transaction
    {
        $data['date'] = Carbon::parse($data['date']);
        $data['description'] = ucfirst((string) $data['description']);

        return Transaction::query()->create($data);
    }
}
