<?php

namespace App\Http\Requests;

use App\Enums\PermissionEnum;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return (bool) auth()->user()->can(PermissionEnum::PostUpdate->value);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'content' => ['required', 'array'],
            'status' => ['required', 'string', 'in:draft,published'],
            'featured_image' => ['nullable', 'string', 'url', 'max:255'],
            'excerpt' => ['required', 'string'],
            'slug' => ['required', 'string', 'max:255'],
            'tags' => ['nullable', 'array'],
        ];
    }
}
