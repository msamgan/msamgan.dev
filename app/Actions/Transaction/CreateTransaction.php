<?php

namespace App\Actions\Transaction;

use App\Models\Transaction;

class CreateTransaction
{
    public function handle(array $data): Transaction
    {
        return Transaction::create($data);
    }
}
