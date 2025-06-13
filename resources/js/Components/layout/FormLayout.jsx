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
                <PrimaryButton disabled={processing} id={'savePostBtn'}>
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
                    <p className="bg-green-50 flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-green-600">
                        <i className="ri-check-line mr-2 text-sm text-green-600"></i>
                        Saved successfully
                    </p>
                </Transition>
            </div>
        </form>
    )
}
