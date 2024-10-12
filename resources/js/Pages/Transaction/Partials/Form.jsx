import { useForm } from '@inertiajs/react'
import { dataObject } from '@/Pages/Transaction/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import FormLayout from '@/Components/layout/FormLayout.jsx'
import Fields from '@/Pages/Transaction/Partials/Fields.jsx'

export default function Form({ getTransactions, transaction = null, projects, getProjects, descriptions }) {
    const [action, setAction] = useState(routes.transaction.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))

    useEffect(() => {
        setAction(transaction ? routes.transaction.update(transaction.id) : routes.transaction.store)
        setData(dataObject(transaction))
    }, [transaction])

    const submit = (e) => {
        e.preventDefault()

        let confirmation = confirm('Are you sure you want to save this transaction?')

        if (!confirmation) {
            return
        }

        post(action, {
            onSuccess: (r) => {
                if (!transaction) {
                    reset()
                }

                getTransactions()
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
                projects={projects}
                getProjects={getProjects}
                descriptions={descriptions}
            />
        </FormLayout>
    )
}
