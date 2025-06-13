import { useForm } from '@inertiajs/react'
import { dataObject } from '@/Pages/Post/helper.js'
import { useEffect, useRef, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import FormLayout from '@/Components/layout/FormLayout.jsx'
import Fields from '@/Pages/Post/Partials/Fields.jsx'

import { services } from '@/Utils/services/index.js'
import { makeGetCall, objectIsEmpty } from '@/Utils/methods.js'
import { initEditor } from '@/Pages/Post/Partials/editor.js'

export default function Form({ postData = null }) {
    const [action, setAction] = useState(routes.post.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))
    const [content, setContent] = useState({})
    const [isSaving, setIsSaving] = useState(false)
    const [tagList, setTagList] = useState([])
    const [loading, setLoading] = useState(false)

    const editor = useRef(null)

    const getTagList = () => {
        makeGetCall(services.post.tag.list, setTagList, setLoading)
    }

    const submit = (e) => {
        e.preventDefault()
        setData('content', objectIsEmpty(content) && postData ? postData.content : content)
        setIsSaving(true)
    }

    useEffect(() => {
        setAction(postData ? routes.post.update(postData.id) : routes.post.store)
        setData(dataObject(postData))
        if (editor.current) editor.current.destroy()
        editor.current = initEditor(postData ? postData.content : {}, setContent)
    }, [postData])

    useEffect(() => {
        if (!isSaving) return

        post(action, {
            onSuccess: (r) => {
                if (!postData) {
                    axios.get(services.post.last).then((response) => {
                        setData(dataObject(response.data))
                        setAction(routes.post.update(response.data.id))
                        window.location.href = services.post.edit(response.data.id)
                    })
                }
            },
            onError: () => {},
            onFinish: () => {
                setIsSaving(false)
            },
        })
    }, [isSaving])

    useEffect(() => {
        getTagList()
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey && e.key === 's') || (e.metaKey && e.key === 's')) {
                e.preventDefault()
                document.getElementById('savePostBtn').click()
            }
        })
    }, [])

    return (
        <>
            {data.featured_image && (
                <span>
                    <img
                        src={data.featured_image}
                        alt={data.title}
                        className="mb-12 ml-5 h-64 max-w-full rounded-lg object-cover"
                    />
                </span>
            )}

            <FormLayout submit={submit} processing={processing} recentlySuccessful={recentlySuccessful} w={'w-11/12'}>
                <Fields data={data} setData={setData} errors={errors} tagList={tagList} />
            </FormLayout>
        </>
    )
}
