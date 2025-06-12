import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { hasPermission, makeGetCall } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import PageHeader from '@/Components/PageHeader.jsx'
import { services } from '@/Utils/services/index.js'
import Media from '@/Pages/Media/Partial/Media.jsx'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.media.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.media.create)

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
                    <div className="rounded border border-green-400 bg-green-100 px-4 py-3 text-green-800">
                        {notification}
                    </div>
                </div>
            )}

            {hasListPermission && (
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {media.map((photo) => {
                        return (
                            <div key={photo.name} className="relative rounded-md">
                                <img
                                    src={photo.url}
                                    alt={photo.name}
                                    onClick={() => {
                                        let url = photo.url
                                        url = url.split('?')[0]
                                        navigator.clipboard.writeText(url)

                                        setNotification('Copied to clipboard')
                                        setTimeout(() => {
                                            setNotification(null)
                                        }, 2000)
                                    }}
                                    className="h-48 w-full cursor-pointer rounded-lg object-contain"
                                />
                            </div>
                        )
                    })}
                </div>
            )}
        </Master>
    )
}
