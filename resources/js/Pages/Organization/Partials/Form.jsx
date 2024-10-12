import { useForm } from '@inertiajs/react'
import { dataObject } from '@/Pages/Organization/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import Fields from '@/Pages/Organization/Partials/Fields.jsx'
import FormLayout from '@/Components/layout/FormLayout.jsx'

export default function Form({ getOrganizations, organization = null }) {
    const [action, setAction] = useState(routes.organization.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))

    useEffect(() => {
        setAction(organization ? routes.organization.update(organization.id) : routes.organization.store)
        setData(dataObject(organization))
    }, [organization])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!organization) {
                    reset()
                }

                getOrganizations()
            },
            onError: () => {},
        })
    }

    return (
        <FormLayout submit={submit} processing={processing} recentlySuccessful={recentlySuccessful}>
            <Fields data={data} setData={setData} errors={errors} />
        </FormLayout>
    )
}
