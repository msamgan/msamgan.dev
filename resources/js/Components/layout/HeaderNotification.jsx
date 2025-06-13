import { useEffect, useRef, useState } from 'react'
import { formatDuration } from '@/Utils/methods.js'
import { routes } from '@/Utils/routes/index.js'

export default function HeaderNotification({ user }) {
    const [unreadNotifications, setUnreadNotifications] = useState(0)
    const [topThreeNotifications, setTopThreeNotifications] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        setUnreadNotifications(user.notifications.filter((notification) => !notification.read_at).length)
        setTopThreeNotifications(user.notifications.slice(0, 3))
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsOpen(false)
        }
    }

    return (
        <li className="relative mx-4 xl:mx-1" ref={dropdownRef}>
            <button
                className="relative flex h-10 w-10 items-center justify-center rounded-full border text-gray-700 transition duration-150 ease-in-out hover:bg-primary hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Notifications"
            >
                <i className="ri-notification-line text-sm"></i>
                {unreadNotifications > 0 && (
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-red-600"></span>
                )}
            </button>

            {isOpen && (
                <ul className="absolute right-0 z-20 mt-2 w-80 origin-top-right transform rounded-md bg-white py-0 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                    <li className="border-b">
                        <div className="flex items-center justify-between px-4 py-3">
                            <h6 className="m-0 text-sm font-medium">Notifications</h6>
                            <div className="flex items-center">
                                <span className="rounded-full bg-primary bg-opacity-10 px-2 py-1 text-xs text-primary">
                                    {unreadNotifications} New
                                </span>
                            </div>
                        </div>
                    </li>

                    <li className="max-h-64 overflow-y-auto">
                        {topThreeNotifications.length > 0 ? (
                            <ul className="divide-y divide-gray-100">
                                {topThreeNotifications.map((notification, index) => (
                                    <li
                                        key={index}
                                        className="hover:bg-gray-50 cursor-pointer transition duration-150 ease-in-out"
                                    >
                                        <div className="flex p-3">
                                            <div className="flex-grow">
                                                <h6 className="mb-1 text-sm font-medium">{notification.data.title}</h6>
                                                <p className="mb-1 text-xs text-gray-700">
                                                    {notification.data.message}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {formatDuration(notification.created_at)}
                                                </p>
                                            </div>
                                            <div className="flex flex-shrink-0 items-center">
                                                {!notification.read_at && (
                                                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-4 text-center text-sm text-gray-500">No notifications</div>
                        )}
                    </li>

                    <li className="border-t">
                        <div className="p-4">
                            <a
                                className="block w-full rounded bg-primary py-2 text-center text-sm text-white transition duration-150 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                href={routes.notifications.index}
                            >
                                View all notifications
                            </a>
                        </div>
                    </li>
                </ul>
            )}
        </li>
    )
}
