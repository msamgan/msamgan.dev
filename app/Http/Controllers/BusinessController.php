<?php

namespace App\Http\Controllers;

use App\Actions\Business\UpdateBusiness;
use App\Http\Requests\StoreBusinessRequest;
use App\Http\Requests\UpdateBusinessRequest;
use App\Models\Business;
use Inertia\Inertia;
use Inertia\Response;

class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): void
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): void
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBusinessRequest $request): void
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Business $business): void
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Business $business): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBusinessRequest $request, Business $business, UpdateBusiness $updateBusiness): void
    {
        $updateBusiness->handle(business: $business, data: $request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Business $business): void
    {
        //
    }

    public function settings(): Response
    {
        return Inertia::render('Business/Settings/Index');
    }
}
