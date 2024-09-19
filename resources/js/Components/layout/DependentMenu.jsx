import { Link } from '@inertiajs/react'

export default function DependentMenu({ menuItems, itemKey, index }) {
    return (
        <li
            key={index}
            onClick={(e) => {
                e.target.parentElement.classList.toggle('open')
            }}
            className={
                menuItems[itemKey].map((item, index) => route().current(item.route)).includes(true)
                    ? 'menu-item active'
                    : 'menu-item'
            }
        >
            <a href="#" className="menu-link menu-toggle">
                <i
                    onClick={(e) => {
                        e.target.parentElement.parentElement.classList.toggle('open')
                    }}
                    className={menuItems[itemKey][0].parent.icon + ' menu-icon tf-icons'}
                ></i>
                <div
                    data-i18n={itemKey}
                    onClick={(e) => {
                        e.target.parentElement.parentElement.classList.toggle('open')
                    }}
                >
                    {itemKey}
                </div>
            </a>
            <ul className="menu-sub">
                {menuItems[itemKey].map((item, index) => (
                    <li key={index} className={route().current(item.route) ? 'menu-item active' : 'menu-item'}>
                        <Link href={route(item.route)} className="menu-link">
                            <i className={item.icon + ' menu-icon tf-icons'}></i>
                            <div data-i18n={item.label}>{item.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}
