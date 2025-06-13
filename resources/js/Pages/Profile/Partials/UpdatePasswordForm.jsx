import { useRef } from 'react'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import { Transition } from '@headlessui/react'

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef()
    const currentPasswordInput = useRef()

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    const updatePassword = (e) => {
        e.preventDefault()

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation')
                    passwordInput.current.focus()
                }

                if (errors.current_password) {
                    reset('current_password')
                    currentPasswordInput.current.focus()
                }
            },
        })
    }

    return (
        <section className={className}>
            <div className="border-b border-gray-200 px-6 py-5">
                <h2 className="text-lg font-medium text-gray-900">Update Password</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </div>

            <form onSubmit={updatePassword} className="space-y-6 p-6">
                <div className="w-full">
                    <div className="group relative">
                        <InputLabel htmlFor="current_password" required={true} className="mb-2">
                            Current Password
                        </InputLabel>
                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type="password"
                            autoComplete="current-password"
                            placeholder="Enter your current password"
                        />
                        <InputError message={errors.current_password} className="mt-2" />
                    </div>
                </div>

                <div className="w-full">
                    <div className="group relative">
                        <InputLabel htmlFor="password" required={true} className="mb-2">
                            New Password
                        </InputLabel>
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            autoComplete="new-password"
                            placeholder="Enter your new password"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>
                </div>

                <div className="w-full">
                    <div className="group relative">
                        <InputLabel htmlFor="password_confirmation" required={true} className="mb-2">
                            Confirm Password
                        </InputLabel>
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type="password"
                            autoComplete="new-password"
                            placeholder="Confirm your new password"
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 pt-2">
                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    )
}
