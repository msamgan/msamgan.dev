import { useEffect, useState, useRef } from 'react'
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-150 ease-in-out"
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Notifications"
            >
                <i className="ri-notification-2-line text-2xl"></i>
                {unreadNotifications > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full border border-white"></span>
                )}
            </button>

            {isOpen && (
                <ul className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-0 z-20 transition transform origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <li className="border-b">
                        <div className="flex items-center justify-between py-3 px-4">
                            <h6 className="text-sm font-medium m-0">Notifications</h6>
                            <div className="flex items-center">
                                <span className="bg-primary bg-opacity-10 text-primary text-xs rounded-full px-2 py-1">
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
                                                <h6 className="text-sm font-medium mb-1">{notification.data.title}</h6>
                                                <p className="text-xs text-gray-700 mb-1">{notification.data.message}</p>
                                                <p className="text-xs text-gray-500">{formatDuration(notification.created_at)}</p>
                                            </div>
                                            <div className="flex-shrink-0 flex items-center">
                                                {!notification.read_at && (
                                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-4 text-center text-gray-500 text-sm">
                                No notifications
                            </div>
                        )}
                    </li>

                    <li className="border-t">
                        <div className="p-4">
                            <a
                                className="block w-full bg-primary hover:bg-opacity-90 text-white text-center rounded py-2 text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
