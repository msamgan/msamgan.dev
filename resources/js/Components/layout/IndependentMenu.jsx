import { Link } from '@inertiajs/react'

export default function IndependentMenu({ item, index }) {
    return (
        <li
            key={index}
            className={
                route().current(item.route) ? 'border-b-2 border-primary px-4 py-2' : 'px-4 py-2'
            }
        >
            <Link href={route(item.route)} className="flex items-center space-x-2 hover:text-primary">
                <i className={item.icon + ' text-lg'}></i>
                <div data-i18n={item.label}>{item.label}</div>
            </Link>
        </li>
    )
}
