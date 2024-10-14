import { useForm } from '@inertiajs/react'
import { dataObject } from '@/Pages/Post/helper.js'
import { useEffect, useRef, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import FormLayout from '@/Components/layout/FormLayout.jsx'
import Fields from '@/Pages/Post/Partials/Fields.jsx'

import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'
import CodeTool from '@editorjs/code'
import List from '@editorjs/list'
import InlineCode from '@editorjs/inline-code'
import Quote from '@editorjs/quote'
import Delimiter from '@editorjs/delimiter'
import InlineImage from 'editorjs-inline-image'
import YoutubeEmbed from 'editorjs-youtube-embed'
import RawTool from '@editorjs/raw'
import Table from '@editorjs/table'

import './editor.css'
import { services } from '@/Utils/services/index.js'
import { objectIsEmpty } from '@/Utils/methods.js'

export default function Form({ getPosts, postData = null }) {
    const [action, setAction] = useState(routes.post.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))
    const [content, setContent] = useState({})
    const [isSaving, setIsSaving] = useState(false)

    const editor = useRef(null)

    useEffect(() => {
        setAction(postData ? routes.post.update(postData.id) : routes.post.store)
        setData(dataObject(postData))
        if (editor.current) editor.current.destroy()
        editor.current = initEditor(postData ? postData.content : {})
    }, [postData])

    const submit = (e) => {
        e.preventDefault()
        if (objectIsEmpty(content) && postData) {
            setData('content', postData.content)
        } else {
            setData('content', content)
        }

        setIsSaving(true)
    }

    useEffect(() => {
        if (!isSaving) return

        post(action, {
            onSuccess: (r) => {
                if (!postData) {
                    axios.get(services.post.last).then((response) => {
                        setData(dataObject(response.data))
                        setAction(routes.post.update(response.data.id))
                    })
                }

                getPosts()
            },
            onError: () => {},
            onFinish: () => {
                setIsSaving(false)
            },
        })
    }, [isSaving])

    const initEditor = (data) => {
        return new EditorJS({
            holder: 'editor',
            placeholder: 'Let`s write an awesome story!',
            tools: {
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                },
                header: Header,
                code: CodeTool,
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered',
                    },
                },
                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+M',
                },
                quote: Quote,
                image: {
                    class: InlineImage,
                    inlineToolbar: true,
                    config: {
                        embed: {
                            display: true,
                        },
                        unsplash: {
                            appName: 'CodeBySamgan',
                            apiUrl: 'https://msamgan.dev',
                            maxResults: 30,
                        },
                    },
                },
                youtubeEmbed: YoutubeEmbed,
                raw: RawTool,
                table: Table,
                delimiter: Delimiter,
            },
            onReady: async (api) => {
                // console.log("Editor.js is ready to work!")
            },
            onChange: async (api, event) => {
                // console.log(await api.saver.save())
                setContent(await api.saver.save())
            },
            data: data,
        })
    }

    useEffect(() => {
        // getTagList()
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
                <Fields data={data} setData={setData} errors={errors} />
            </FormLayout>
        </>
    )
}
