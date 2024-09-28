<?php

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Actions\Transaction\CreateTransaction;
use App\Actions\Transaction\UpdateTransaction;
// use App\Http\Requests\DeleteTransactionRequest;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Models\Transaction;
use App\Notifications\TransactionCreated;
// use App\Notifications\TransactionDeleted;
use App\Notifications\TransactionUpdated;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class TransactionController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Transaction/Index');
    }

    /**
     * @throws Exception
     */
    public function store(StoreTransactionRequest $request, CreateTransaction $createTransaction, NotifyUser $notifyUser): void
    {
        DB::beginTransaction();

        try {
            $transaction = $createTransaction->handle($request->validated());

            $notifyUser->handle(new TransactionCreated(auth()->user()));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function show(Transaction $transaction): Transaction
    {
        // Access::businessCheck(businessId: $user->business_id);

        return $transaction;
    }

    public function update(UpdateTransactionRequest $request, Transaction $transaction, UpdateTransaction $updateTransaction, NotifyUser $notifyUser): void
    {
        $updateTransaction->handle($transaction, $request->validated());

        $notifyUser->handle(new TransactionUpdated(auth()->user()));
    }

    /*public function destroy(DeleteTransactionRequest $request, Transaction $transaction, NotifyUser $notifyUser): void
    {
        $notifyUser->handle(new TransactionDeleted(auth()->user()));

        $transaction->delete();
    }*/

    public function transactions(): Collection
    {
        return Transaction::query()
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
