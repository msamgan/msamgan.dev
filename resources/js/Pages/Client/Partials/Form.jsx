import { useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import { Transition } from '@headlessui/react'
import { dataObject } from '@/Pages/Client/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'

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
                        <div className="col-12 col-md-12">
                            <div className="form-floating form-floating-outline">
                                <TextInput
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    id="user-name"
                                    placeholder="Name"
                                    required={true}
                                    isFocused={true}
                                />
                                <InputLabel htmlFor="user-name" required={true}>
                                    Name
                                </InputLabel>
                                <InputError className="mt-2" message={errors.name} />
                            </div>
                        </div>
                        <div className="col-12 col-md-12">
                            <div className="form-floating form-floating-outline">
                                <select
                                    value={data.organization_id}
                                    onChange={(e) => setData('organization_id', e.target.value)}
                                    id="organization"
                                    required={true}
                                    className="form-select"
                                >
                                    <option value="">Select Organization</option>
                                    {organizations.map((organization) => (
                                        <option key={organization.id} value={organization.id}>
                                            {organization.name}
                                        </option>
                                    ))}
                                </select>
                                <InputLabel htmlFor="organization" required={true}>
                                    Organization
                                </InputLabel>
                                <InputError className="mt-2" message={errors.name} />
                                <small className="text-muted flex justify-between">
                                    <span className={'mt-2'}>
                                        If the organization is not listed, please{' '}
                                        <a href="#" className={'text-blue-700'} onClick={getOrganizations}>
                                            click here
                                        </a>{' '}
                                        to refresh the list.
                                    </span>
                                    <a
                                        target={'_blank'}
                                        href={route('organization.index')}
                                        className={'ml-5 mt-2 text-blue-700'}
                                    >
                                        Add Organization
                                    </a>
                                </small>
                            </div>
                        </div>
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
