import { useForm } from '@inertiajs/react'
import { dataObject } from '@/Pages/Project/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import Fields from '@/Pages/Project/Partials/Fields.jsx'
import FormLayout from '@/Components/layout/FormLayout.jsx'

export default function Form({ getProjects, project = null, clients, getClients }) {
    const [action, setAction] = useState(routes.project.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))

    useEffect(() => {
        setAction(project ? routes.project.update(project.id) : routes.project.store)
        setData(dataObject(project))
    }, [project])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!project) {
                    reset('name')
                }

                getProjects()
            },
            onError: () => {},
        })
    }

    return (
        <FormLayout submit={submit} processing={processing} recentlySuccessful={recentlySuccessful}>
            <Fields data={data} setData={setData} errors={errors} clients={clients} getClients={getClients} />
        </FormLayout>
    )
}
