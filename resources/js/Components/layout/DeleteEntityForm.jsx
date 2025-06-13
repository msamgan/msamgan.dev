import { useRef, useState } from 'react'
import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'

export default function DeleteEntityForm({ action, refresh, className = '' }) {
    const [confirmingEntityDeletion, setConfirmingEntityDeletion] = useState(false)
    const passwordInput = useRef()

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    })

    const confirmUserDeletion = () => {
        setConfirmingEntityDeletion(true)
    }

    const deleteUser = (e) => {
        e.preventDefault()

        destroy(action, {
            preserveScroll: true,
            onSuccess: () => {
                refresh()
                closeModal()
            },
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        })
    }

    const closeModal = () => {
        setConfirmingEntityDeletion(false)

        reset()
    }

    return (
        <section className={`space-y-6 ${className}`}>
            <button
                type="button"
                className="hover:bg-red-50 focus:bg-red-50 flex w-full items-center px-4 py-2 text-sm text-red-600 transition-colors duration-200 hover:text-red-700 focus:text-red-700 focus:outline-none"
                onClick={confirmUserDeletion}
            >
                <i className="ri-delete-bin-line mr-2 text-sm text-red-500"></i>
                Delete
            </button>

            <Modal show={confirmingEntityDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">Are you sure you want to delete?</h2>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        Once this is deleted, all of its resources and data will be permanently deleted. Please enter
                        your password to confirm you would like to permanently delete this data.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            required={true}
                            className="mb-1 text-sm font-medium text-gray-700"
                        />
                        <TextInput
                            id="password"
                            type="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            isFocused
                            placeholder="Enter your password"
                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-8 flex justify-end space-x-4">
                        <SecondaryButton
                            onClick={closeModal}
                            className="hover:bg-gray-50 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            disabled={processing}
                            className="border-transparent rounded-md border bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Delete
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    )
}
