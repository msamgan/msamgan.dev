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
                    ? 'group relative border-b-2 border-primary px-4 py-2'
                    : 'group relative px-4 py-2'
            }
        >
            <a href="#" className="flex cursor-pointer items-center space-x-2 hover:text-primary">
                <i
                    onClick={(e) => {
                        e.target.parentElement.parentElement.classList.toggle('open')
                    }}
                    className={menuItems[itemKey][0].parent.icon + ' text-lg'}
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
            <ul className="absolute left-0 z-10 mt-2 hidden min-w-[200px] rounded-md bg-white py-2 shadow-lg group-[.open]:block">
                {menuItems[itemKey].map((item, index) => (
                    <li key={index} className={route().current(item.route) ? 'bg-gray-100' : 'hover:bg-gray-50'}>
                        <Link href={route(item.route)} className="flex items-center space-x-2 px-4 py-2 hover:text-primary">
                            <i className={item.icon + ' text-lg'}></i>
                            <div data-i18n={item.label}>{item.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}
