import { Transition } from '@headlessui/react'

export default function FormLayout({ children, submit, processing, recentlySuccessful, w = 'w-2/3' }) {
    return (
        <form onSubmit={submit}>
            <div className={'mb-6 ml-4 ' + w}>
                <div className="p-6 bg-white rounded-lg shadow">
                    <div className="grid grid-cols-1 gap-5">{children}</div>
                </div>
            </div>

            <div className={'flex justify-end ml-5 gap-4 ' + w}>
                <button disabled={processing} id={'savePostBtn'} className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50">
                    Save Changes
                </button>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="mt-3 text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    )
}
