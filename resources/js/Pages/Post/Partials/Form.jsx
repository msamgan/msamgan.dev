import { useForm } from '@inertiajs/react'
import { dataObject } from '@/Pages/Post/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import FormLayout from '@/Components/layout/FormLayout.jsx'
import Fields from '@/Pages/Post/Partials/Fields.jsx'

export default function Form({ getPosts, postData = null }) {
    const [action, setAction] = useState(routes.post.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))

    useEffect(() => {
        setAction(postData ? routes.post.update(postData.id) : routes.post.store)
        setData(dataObject(postData))
    }, [postData])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!postData) {
                    reset('name')
                }

                getPosts()
            },
            onError: () => {},
        })
    }

    return (
        <FormLayout submit={submit} processing={processing} recentlySuccessful={recentlySuccessful} w={'w-11/12'}>
            <Fields data={data} setData={setData} errors={errors} />
        </FormLayout>
    )
}
