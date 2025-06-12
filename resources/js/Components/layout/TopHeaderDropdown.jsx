import ResponsiveNavLink from '@/Components/ResponsiveNavLink.jsx'
import { hasPermission } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useState, useRef, useEffect } from 'react'

export default function TopHeaderDropdown({ user }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

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
        <li className="relative" ref={dropdownRef}>
            <button
                className="flex items-center rounded-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="User menu"
            >
                <div className="relative">
                    <img
                        src="/img/avatars/1.png"
                        alt={`${user.name}'s profile`}
                        className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500"></span>
                </div>
            </button>

            {isOpen && (
                <ul className="absolute right-0 z-20 mt-2 w-56 origin-top-right transform rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                    <li>
                        <div className="block px-4 py-2">
                            <div className="flex items-center">
                                <div className="mr-3 flex-shrink-0">
                                    <div className="relative">
                                        <img
                                            src="/img/avatars/1.png"
                                            alt={`${user.name}'s profile`}
                                            className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                                        />
                                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500"></span>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <span className="block font-medium text-gray-900">{user.name}</span>
                                    <span className="text-sm text-gray-500">{user.role.display_name}</span>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="my-1 border-t border-gray-100"></div>
                    </li>

                    <li>
                        <ResponsiveNavLink
                            className="flex items-center px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                            href={route('profile.edit')}
                        >
                            <i className="ri-user-3-line mr-3 text-gray-500"></i>
                            <span>My Profile</span>
                        </ResponsiveNavLink>
                    </li>

                    {user.business_id && hasPermission(user, permissions.business.update) && (
                        <li>
                            <ResponsiveNavLink
                                className="flex items-center px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                                href={route('business.settings')}
                            >
                                <i className="ri-settings-3-line mr-3 text-gray-500"></i>
                                <span>Business Settings</span>
                            </ResponsiveNavLink>
                        </li>
                    )}

                    <li>
                        <div className="my-1 border-t border-gray-100"></div>
                    </li>

                    <li>
                        <ResponsiveNavLink
                            className="flex items-center px-4 py-2 text-sm text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100"
                            method="post"
                            href={route('logout')}
                            as="button"
                        >
                            <i className="ri-shut-down-line mr-3 text-gray-500"></i>
                            <span>Log Out</span>
                        </ResponsiveNavLink>
                    </li>
                </ul>
            )}
        </li>
    )
}
