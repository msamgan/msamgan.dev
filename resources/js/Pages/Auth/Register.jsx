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

            <form onSubmit={submit}>
                <div className={'form-floating form-floating-outline'}>
                    <TextInput
                        id="business_name"
                        name="business_name"
                        value={data.business_name}
                        className="mb-3 mt-1 block w-full"
                        autoComplete="business_name"
                        isFocused={true}
                        onChange={(e) => setData('business_name', e.target.value)}
                        required
                        placeholder={'Business Name'}
                    />
                    <InputLabel htmlFor="business_name" value="Business Name" required={true} />
                    <InputError message={errors.business_name} className="mt-2" />
                </div>

                <div className={'form-floating form-floating-outline mt-6'}>
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        placeholder={'Name'}
                    />
                    <InputLabel htmlFor="name" value="Name" required={true} />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className={'form-floating form-floating-outline mt-6'}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        placeholder={'Email'}
                    />
                    <InputLabel htmlFor="email" value="Email" required={true} />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className={'form-floating form-floating-outline mt-6'}>
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                        placeholder={'Password'}
                    />
                    <InputLabel htmlFor="password" value="Password" required={true} />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className={'form-floating form-floating-outline mt-6'}>
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                        placeholder={'Confirm Password'}
                    />
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" required={true} />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    )
}
