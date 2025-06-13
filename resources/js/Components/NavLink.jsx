import { Link } from '@inertiajs/react'

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-3 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ' +
                (active
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-700') +
                ' ' + className
            }
        >
            {children}
        </Link>
    )
}
