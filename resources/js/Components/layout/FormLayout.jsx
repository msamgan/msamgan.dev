import { Transition } from '@headlessui/react'

export default function FormLayout({ children, submit, processing, recentlySuccessful, w = 'w-full' }) {
    return (
        <form onSubmit={submit} className="space-y-6">
            <div className={w}>
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="grid grid-cols-1 gap-6">{children}</div>
                </div>
            </div>

            <div className={`flex items-center justify-end gap-4 ${w}`}>
                <button
                    disabled={processing}
                    id={'savePostBtn'}
                    className="border-transparent inline-flex items-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                >
                    Save Changes
                </button>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <p className="flex items-center text-sm font-medium text-green-600">
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
