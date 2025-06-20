import { Link } from '@inertiajs/react'

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`flex w-full items-center border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700 focus:bg-indigo-100 focus:text-indigo-800'
                    : 'border-transparent hover:bg-gray-50 text-gray-600 hover:border-gray-300 hover:text-gray-800'
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ${className}`}
        >
            {children}
        </Link>
    )
}
