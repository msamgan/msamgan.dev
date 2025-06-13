import { Link } from '@inertiajs/react'

export default function IndependentMenu({ item, index }) {
    return (
        <li
            key={index}
            className={route().current(item.route) ? 'border-b-2 border-primary px-3 py-2.5' : 'px-3 py-2.5'}
        >
            <Link
                href={route(item.route)}
                className={`flex items-center space-x-2 text-gray-700 transition-colors duration-200 hover:text-primary ${route().current(item.route) ? 'font-medium text-primary' : ''}`}
            >
                <i className={item.icon + ' text-lg opacity-80'}></i>
                <div data-i18n={item.label} className="font-medium">
                    {item.label}
                </div>
            </Link>
        </li>
    )
}
