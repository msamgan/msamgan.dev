<?php

namespace App\Http\Controllers;

use App\Actions\Notification\NotifyUser;
use App\Actions\Transaction\CreateTransaction;
use App\Http\Requests\StoreTransactionRequest;
use App\Models\Transaction;
use App\Notifications\TransactionCreated;
use Carbon\Carbon;
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

            $notifyUser->handle(new TransactionCreated(auth()->user(), $transaction));

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function transactions(): Collection
    {
        $query = Transaction::query();

        if (request('q')) {
            $query->where('description', 'like', '%' . request('q') . '%');
        }

        if (request('type')) {
            $query->where('type', request('type'));
        }

        $startDate = request('start-date') ? Carbon::parse(request('start-date')) : null;
        $endDate = request('end-date') ? Carbon::parse(request('end-date')) : null;

        if ($startDate && ! $endDate) {
            $endDate = Carbon::now();
        }

        if (! $startDate && $endDate) {
            $startDate = Carbon::now();
        }

        if ($startDate && $endDate) {
            $query->whereBetween('date', [$startDate, $endDate]);
        }

        return $query->with('project')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function descriptions(): \Illuminate\Support\Collection
    {
        return Transaction::query()
            ->select('description')
            ->distinct()
            ->get()
            ->pluck('description');
    }
}
