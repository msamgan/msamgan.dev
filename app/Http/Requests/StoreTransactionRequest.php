<?php

namespace App\Http\Requests;

use App\Enums\PermissionEnum;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return (bool) auth()->user()->can(PermissionEnum::TransactionCreate->value);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'type' => ['required', 'string', 'in:incoming,outgoing'],
            'amount' => ['required', 'numeric'],
            'description' => ['required', 'string'],
            'date' => ['required', 'date'],
            'project_id' => ['nullable', 'exists:projects,id'],
        ];
    }
}
