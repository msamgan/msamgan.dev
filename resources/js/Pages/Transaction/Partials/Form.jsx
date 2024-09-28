import { useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import { Transition } from '@headlessui/react'
import { dataObject } from '@/Pages/Transaction/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'

export default function Form({ getTransactions, transaction = null}) {
    const [action, setAction] = useState(routes.transaction.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))

    useEffect(() => {
        setAction(transaction ? routes.transaction.update(transaction.id) : routes.transaction.store)
        setData(dataObject(transaction))
    }, [transaction])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!transaction) {
                    reset('name')
                }

                getTransactions()
            },
            onError: () => {},
        })
    }

    return (
        <form onSubmit={submit}>
            <div className="card mb-6 w-2/3">
                <div className="card-header">
                    <h5 className="card-title m-0 text-lg">Transaction Details</h5>
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
