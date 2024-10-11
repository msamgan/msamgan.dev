import { useForm } from '@inertiajs/react'
import { Transition } from '@headlessui/react'
import { dataObject } from '@/Pages/Client/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import Fields from '@/Pages/Client/Partials/Fields.jsx'

export default function Form({ getClients, organizations, getOrganizations, client = null }) {
    const [action, setAction] = useState(routes.client.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))

    useEffect(() => {
        setAction(client ? routes.client.update(client.id) : routes.client.store)
        setData(dataObject(client))
    }, [client])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!client) {
                    reset('name')
                }

                getClients()
            },
            onError: () => {},
        })
    }

    return (
        <form onSubmit={submit}>
            <div className="card mb-6 w-2/3">
                <div className="card-header">
                    <h5 className="card-title m-0 text-lg">Client Details</h5>
                </div>
                <div className="card-body">
                    <div className="row g-5">
                        <Fields
                            data={data}
                            setData={setData}
                            errors={errors}
                            organizations={organizations}
                            getOrganizations={getOrganizations}
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end w-2/3 gap-4">
                <button disabled={processing} className="btn btn-primary">
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
