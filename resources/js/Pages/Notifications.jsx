import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import PageHeader from '@/Components/PageHeader.jsx'
import { formatDuration } from '@/Utils/methods.js'

export default function Notifications({ auth }) {
    return (
        <Master user={auth.user} header={'Notifications'}>
            <Head title="Notifications" />
            <PageHeader title={'Notifications'} subtitle={'Notifications for the user'}></PageHeader>

            <ul className="-ml-5">
                <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                        {auth.user.notifications.map((notification, index) => (
                            <li
                                key={index}
                                className="list-group-item list-group-item-action dropdown-notifications-item rounded-2 m-3 p-4 shadow-sm"
                            >
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-1 text-lg">{notification.data.title}</h6>
                                        <small className="d-block text-body mb-1 text-sm">
                                            {notification.data.message}
                                        </small>
                                        <small className="text-muted">{formatDuration(notification.created_at)}</small>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </Master>
    )
}
