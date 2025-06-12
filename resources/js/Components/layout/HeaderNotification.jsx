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
        <li className="relative mx-4 xl:mx-1 group">
            <a
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <i className="ri-notification-2-line text-2xl"></i>
                <span
                    className={
                        user.notifications.filter((notification) => !notification.read_at).length
                            ? 'absolute w-2 h-2 bg-red-600 rounded-full top-2 border border-white'
                            : 'hidden'
                    }
                ></span>
            </a>
            <ul className="hidden group-hover:block absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-0 z-20">
                <li className="border-b py-2">
                    <div className="flex items-center justify-between py-2 px-4">
                        <h6 className="text-sm font-medium m-0">Notification</h6>
                        <div className="flex items-center">
                            <span className="bg-primary bg-opacity-10 text-primary text-xs rounded-full px-2 py-1 mr-2">
                                {unreadNotifications} New
                            </span>
                        </div>
                    </div>
                </li>
                <li className="max-h-64 overflow-y-auto">
                    <ul className="divide-y divide-gray-100">
                        {topFourNotifications.map((notification, index) => (
                            <li
                                key={index}
                                className="hover:bg-gray-50 cursor-pointer"
                            >
                                <div className="flex p-3">
                                    <div className="flex-grow">
                                        <h6 className="text-sm font-medium mb-1">{notification.data.title}</h6>
                                        <p className="text-xs text-gray-700 mb-1">{notification.data.message}</p>
                                        <p className="text-xs text-gray-500">{formatDuration(notification.created_at)}</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        {!notification.read_at && (
                                            <a href="#" className="block">
                                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>

                <li className="border-t">
                    <div className="p-4">
                        <a className="block w-full bg-primary hover:bg-primary-dark text-white text-center rounded py-2 text-sm" href={routes.notifications.index}>
                            <span className="align-middle">View all notifications</span>
                        </a>
                    </div>
                </li>
            </ul>
        </li>
    )
}
