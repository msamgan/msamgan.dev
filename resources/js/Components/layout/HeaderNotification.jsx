import { useEffect, useState } from 'react'
import { formatDuration } from '@/Utils/methods.js'
import { routes } from '@/Utils/routes/index.js'

export default function HeaderNotification({ user }) {
    const [unreadNotifications, setUnreadNotifications] = useState(0)
    const [topFourNotifications, setTopFourNotifications] = useState([])

    useEffect(() => {
        setUnreadNotifications(user.notifications.filter((notification) => !notification.read_at).length)
        setTopFourNotifications(user.notifications.slice(0, 3))
    }, [])

    return (
        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-xl-1 me-4">
            <a
                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <i className="ri-notification-2-line ri-22px"></i>
                <span
                    className={
                        user.notifications.filter((notification) => !notification.read_at).length
                            ? 'badge-dot position-absolute start-50 translate-middle-y badge bg-danger top-0 mt-2 border'
                            : 'position-absolute start-50 translate-middle-y badge bg-danger top-0 mt-2 border'
                    }
                ></span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end py-0">
                <li className="dropdown-menu-header border-bottom py-50">
                    <div className="dropdown-header d-flex align-items-center py-2">
                        <h6 className="mb-0 me-auto">Notification</h6>
                        <div className="d-flex align-items-center">
                            <span className="badge rounded-pill bg-label-primary fs-xsmall me-2">
                                {unreadNotifications} New
                            </span>
                        </div>
                    </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                    <ul className="list-group list-group-flush">
                        {topFourNotifications.map((notification, index) => (
                            <li
                                key={index}
                                className="list-group-item list-group-item-action dropdown-notifications-item"
                            >
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <h6 className="small mb-1">{notification.data.title}</h6>
                                        <small className="d-block text-body mb-1">{notification.data.message}</small>
                                        <small className="text-muted">{formatDuration(notification.created_at)}</small>
                                    </div>
                                    <div className="dropdown-notifications-actions flex-shrink-0">
                                        {!notification.read_at && (
                                            <a href="#" className="dropdown-notifications-read">
                                                <span className="badge badge-dot"></span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="border-top">
                    <div className="d-grid p-4">
                        <a className="btn btn-primary btn-sm d-flex" href={routes.notifications.index}>
                            <small className="align-middle">View all notifications</small>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
    )
}
