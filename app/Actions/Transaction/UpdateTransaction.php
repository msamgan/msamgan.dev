<?php

namespace App\Actions\Transaction;

use App\Models\Transaction;

class UpdateTransaction
{
    public function handle(Transaction $transaction, array $data): Transaction
    {
        $transaction->update($data);

        return $transaction;
    }
}
