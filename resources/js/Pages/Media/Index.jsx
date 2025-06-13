import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { hasPermission, makeGetCall } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import PageHeader from '@/Components/PageHeader.jsx'
import { services } from '@/Utils/services/index.js'
import Media from '@/Pages/Media/Partial/Media.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.media.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.media.create)
    let hasDeletePermission = hasPermission(auth.user, permissions.media.delete)

    const [media, setMedia] = useState([])
    const [loading, setLoading] = useState(true)
    const [notification, setNotification] = useState(null)

    const getMedia = () => {
        makeGetCall(services.media.list, setMedia, setLoading)
    }

    useEffect(() => {
        if (hasListPermission) {
            getMedia()
        }
    }, [])

    const copyToClipboard = (url) => {
        url = url.split('?')[0]
        navigator.clipboard.writeText(url)

        setNotification('Copied to clipboard')
        setTimeout(() => {
            setNotification(null)
        }, 2000)
    }

    return (
        <Master user={auth.user} header={'Media'}>
            <Head title="Media" />

            <PageHeader
                title={'Media List'}
                subtitle={'Find all of your business’s Media and there associated details.'}
            ></PageHeader>

            {hasCreatePermission && <Media getMedia={getMedia} />}

            {notification && (
                <div className="mt-5">
                    <div className="bg-green-50 flex items-center rounded-lg border border-green-200 px-4 py-3 text-green-700 shadow-sm">
                        <i className="ri-checkbox-circle-fill mr-3 text-sm text-green-500"></i>
                        <span className="font-medium">{notification}</span>
                    </div>
                </div>
            )}

            {hasListPermission && (
                <>
                    {media.length > 0 ? (
                        <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                            <ul className="divide-y divide-gray-200">
                                {media.map((item) => (
                                    <li
                                        key={item.name}
                                        className="hover:bg-gray-50 flex flex-col p-4 transition-colors duration-150 sm:flex-row sm:items-center"
                                    >
                                        <div className="flex flex-grow items-center">
                                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
                                                <img
                                                    src={item.url}
                                                    alt={item.name}
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>
                                            <div className="ml-4 flex-grow">
                                                <h3 className="truncate text-sm font-medium text-gray-900">
                                                    {item.name}
                                                </h3>
                                                <p className="mt-1 truncate text-xs text-gray-500">
                                                    {item.url.split('?')[0]}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex space-x-2 sm:mt-0">
                                            <button
                                                onClick={() => copyToClipboard(item.url)}
                                                className="hover:bg-gray-50 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                                title="Copy URL to clipboard"
                                            >
                                                <i className="ri-clipboard-line mr-2 text-sm text-gray-600"></i>
                                                Copy
                                            </button>
                                            {hasDeletePermission && (
                                                <DeleteEntityForm
                                                    action={services.media.destroy(item.name)}
                                                    refresh={getMedia}
                                                    className="hover:bg-red-50 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-red-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                />
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-16 text-center shadow-sm">
                            <i className="ri-image-line mb-4 text-6xl text-gray-300"></i>
                            <h3 className="mb-1 text-lg font-medium text-gray-700">No media found</h3>
                            <p className="text-gray-500">Upload your first media file using the uploader above.</p>
                        </div>
                    )}
                </>
            )}
        </Master>
    )
}
