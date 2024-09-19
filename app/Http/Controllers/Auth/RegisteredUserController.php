<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Business\CreateBusiness;
use App\Actions\Role\AssignRole;
use App\Enums\RoleEnum;
use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws Exception
     */
    public function store(
        Request $request,
        AssignRole $assignRoleAction,
        CreateBusiness $createBusinessAction,
    ): RedirectResponse {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', $this->getPasswordDefaults()],
            'business_name' => ['required', 'string', 'max:255'],
        ]);

        DB::beginTransaction();

        try {
            $user = User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
            ]);

            Auth::login($user);

            $assignRoleAction->handle(user: $user, role: RoleEnum::Business->role(), makeRoleActive: true);

            $createBusinessAction->handle(user: $user, businessName: $request->get('business_name'), makeBusinessActive: true);

            event(new Registered($user));

            DB::commit();

            return redirect(route('dashboard', absolute: false));

        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    private function getPasswordDefaults(): ?Rules\Password
    {
        return Rules\Password::defaults();
    }
}
