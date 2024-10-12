import { useForm } from '@inertiajs/react'
import { dataObject } from '@/Pages/Client/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import Fields from '@/Pages/Client/Partials/Fields.jsx'
import FormLayout from '@/Components/layout/FormLayout.jsx'

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
                    reset()
                }

                getClients()
            },
            onError: () => {},
        })
    }

    return (
        <FormLayout submit={submit} processing={processing} recentlySuccessful={recentlySuccessful}>
            <Fields
                data={data}
                setData={setData}
                errors={errors}
                organizations={organizations}
                getOrganizations={getOrganizations}
            />
        </FormLayout>
    )
}
