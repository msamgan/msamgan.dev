import { Transition } from '@headlessui/react'
import PrimaryButton from '@/Components/PrimaryButton.jsx'

export default function FormLayout({ children, submit, processing, recentlySuccessful, w = 'w-full' }) {
    return (
        <form onSubmit={submit} className="space-y-8">
            <div className={w}>
                <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
                    <div className="grid grid-cols-1 gap-6">{children}</div>
                </div>
            </div>

            <div className={`flex items-center justify-end gap-4 ${w}`}>
                <PrimaryButton
                    disabled={processing}
                    id={'savePostBtn'}
                >
                    Save Changes
                </PrimaryButton>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <p className="flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-600">
                        <svg
                            className="mr-1.5 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Saved successfully
                    </p>
                </Transition>
            </div>
        </form>
    )
}
