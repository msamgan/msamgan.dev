import Checkbox from '@/Components/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('login'), {
            onFinish: () => reset('password'),
        })
    }

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                <p className="mt-2 text-sm text-gray-600">Sign in to your account to continue</p>
            </div>

            {status && (
                <div className="bg-green-50 mb-6 rounded-lg p-3 text-sm font-medium text-green-600">{status}</div>
            )}

            <form onSubmit={submit} className="space-y-6">
                <div className="space-y-1">
                    <InputLabel htmlFor="email" value="Email" required={true} />
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <i className="ri-mail-line text-sm"></i>
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            isFocused={true}
                            placeholder="you@example.com"
                            className="pl-10"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.email} className="mt-1" />
                </div>

                <div className="space-y-1">
                    <div className="flex items-center justify-between">
                        <InputLabel htmlFor="password" value="Password" required={true} />
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-xs font-medium text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </div>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <i className="ri-lock-line text-sm"></i>
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            placeholder="••••••••"
                            className="pl-10"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="flex items-center">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded-sm"
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div>
                    <PrimaryButton className="w-full justify-center py-2.5" disabled={processing}>
                        Sign In
                    </PrimaryButton>
                </div>

                {/*<div className="text-center text-sm">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link href={route('register')} className="font-medium text-primary hover:text-secondary">
                        Register now
                    </Link>
                </div>*/}
            </form>
        </GuestLayout>
    )
}
