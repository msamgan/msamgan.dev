import { Link } from '@inertiajs/react'

export default function IndependentMenu({ item, index }) {
    return (
        <li key={index} className={route().current(item.route) ? 'menu-item active' : 'menu-item'}>
            <Link href={route(item.route)} className="menu-link">
                <i className={item.icon + ' menu-icon tf-icons'}></i>
                <div data-i18n={item.label}>{item.label}</div>
            </Link>
        </li>
    )
}
