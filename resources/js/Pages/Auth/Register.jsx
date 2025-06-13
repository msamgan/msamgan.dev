import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        business_name: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        })
    }

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
                <p className="mt-2 text-sm text-gray-600">Register to get started with our services</p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                <div className="space-y-1">
                    <InputLabel htmlFor="business_name" value="Business Name" required={true} />
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <TextInput
                            id="business_name"
                            name="business_name"
                            value={data.business_name}
                            className="pl-10"
                            autoComplete="business_name"
                            isFocused={true}
                            onChange={(e) => setData('business_name', e.target.value)}
                            required
                            placeholder="Your Business Name"
                        />
                    </div>
                    <InputError message={errors.business_name} className="mt-1" />
                </div>

                <div className="space-y-1">
                    <InputLabel htmlFor="name" value="Name" required={true} />
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="pl-10"
                            autoComplete="name"
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            placeholder="Your Full Name"
                        />
                    </div>
                    <InputError message={errors.name} className="mt-1" />
                </div>

                <div className="space-y-1">
                    <InputLabel htmlFor="email" value="Email" required={true} />
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="pl-10"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            placeholder="you@example.com"
                        />
                    </div>
                    <InputError message={errors.email} className="mt-1" />
                </div>

                <div className="space-y-1">
                    <InputLabel htmlFor="password" value="Password" required={true} />
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="pl-10"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            placeholder="••••••••"
                        />
                    </div>
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="space-y-1">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" required={true} />
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="pl-10"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                            placeholder="••••••••"
                        />
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-1" />
                </div>

                <div className="pt-2">
                    <PrimaryButton className="w-full justify-center py-2.5" disabled={processing}>
                        Create Account
                    </PrimaryButton>
                </div>

                <div className="text-center text-sm">
                    <span className="text-gray-600">Already have an account? </span>
                    <Link href={route('login')} className="font-medium text-primary hover:text-secondary">
                        Sign in
                    </Link>
                </div>
            </form>
        </GuestLayout>
    )
}
