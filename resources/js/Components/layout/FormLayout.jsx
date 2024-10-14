import { Transition } from '@headlessui/react'

export default function FormLayout({ children, submit, processing, recentlySuccessful, w = 'w-2/3' }) {
    return (
        <form onSubmit={submit}>
            <div className={'mb-6 ml-4 ' + w}>
                <div className="card-body">
                    <div className="row g-5">{children}</div>
                </div>
            </div>

            <div className={'d-flex justify-content-end ml-5 gap-4 ' + w}>
                <button disabled={processing} id={'savePostBtn'} className="btn btn-primary">
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
