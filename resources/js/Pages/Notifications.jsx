import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import PageHeader from '@/Components/PageHeader.jsx'
import { formatDuration } from '@/Utils/methods.js'
import { useState, useEffect } from 'react'

export default function Notifications({ auth }) {
    // Group notifications by date
    const [groupedNotifications, setGroupedNotifications] = useState({})

    useEffect(() => {
        const grouped = auth.user.notifications.reduce((groups, notification) => {
            // Get date in YYYY-MM-DD format
            const date = new Date(notification.created_at).toISOString().split('T')[0]

            if (!groups[date]) {
                groups[date] = []
            }

            groups[date].push(notification)
            return groups
        }, {})

        setGroupedNotifications(grouped)
    }, [auth.user.notifications])

    // Function to get appropriate icon based on notification type
    const getNotificationIcon = (notification) => {
        const title = notification.data.title.toLowerCase()

        if (title.includes('created')) return 'ri-add-circle-line'
        if (title.includes('updated')) return 'ri-edit-2-line'
        if (title.includes('deleted')) return 'ri-delete-bin-line'
        if (title.includes('logged in')) return 'ri-login-circle-line'
        if (title.includes('logged out')) return 'ri-logout-circle-line'

        return 'ri-notification-3-line' // Default icon
    }

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const today = new Date()
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)

        if (date.toDateString() === today.toDateString()) {
            return 'Today'
        } else if (date.toDateString() === yesterday.toDateString()) {
            return 'Yesterday'
        } else {
            return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
        }
    }

    return (
        <Master user={auth.user} header={'Notifications'}>
            <Head title="Notifications" />
            <PageHeader title={'Notifications'} subtitle={'Your activity and system notifications'}></PageHeader>

            <div className="max-w-5xl mx-auto">
                {Object.keys(groupedNotifications).length > 0 ? (
                    Object.keys(groupedNotifications)
                        .sort((a, b) => new Date(b) - new Date(a)) // Sort dates in descending order
                        .map((date) => (
                            <div key={date} className="mb-8">
                                <h3 className="text-sm font-medium text-gray-500 mb-4 px-4">{formatDate(date)}</h3>
                                <div className="space-y-3">
                                    {groupedNotifications[date].map((notification, index) => {
                                        const isUnread = !notification.read_at
                                        return (
                                            <div
                                                key={index}
                                                className={`bg-white rounded-lg border ${
                                                    isUnread ? 'border-primary border-l-4' : 'border-gray-100'
                                                } shadow-sm hover:shadow transition-all duration-200 p-4 md:p-5`}
                                            >
                                                <div className="flex items-start">
                                                    <div className={`flex-shrink-0 mr-4 p-2 rounded-full ${
                                                        isUnread ? 'bg-primary bg-opacity-10 text-primary' : 'bg-gray-100 text-gray-500'
                                                    }`}>
                                                        <i className={`${getNotificationIcon(notification)} text-lg`}></i>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h6 className="font-medium text-gray-900 mb-1">
                                                            {notification.data.title}
                                                            {isUnread && (
                                                                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary bg-opacity-10 text-primary">
                                                                    New
                                                                </span>
                                                            )}
                                                        </h6>
                                                        <p className="text-gray-600 text-sm mb-1">
                                                            {notification.data.message}
                                                        </p>
                                                        <p className="text-gray-400 text-xs">
                                                            {formatDuration(notification.created_at)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))
                ) : (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <i className="ri-notification-off-line text-2xl text-gray-400"></i>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications yet</h3>
                        <p className="text-gray-500">When you get notifications, they'll show up here</p>
                    </div>
                )}
            </div>
        </Master>
    )
}
