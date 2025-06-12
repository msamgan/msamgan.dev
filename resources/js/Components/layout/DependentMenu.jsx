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
                    ? 'py-2 px-4 border-b-2 border-primary relative group'
                    : 'py-2 px-4 hover:text-primary relative group'
            }
        >
            <a href="#" className="flex items-center space-x-2 cursor-pointer">
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
            <ul className="hidden group-[.open]:block absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-10 min-w-[200px]">
                {menuItems[itemKey].map((item, index) => (
                    <li key={index} className={route().current(item.route) ? 'bg-gray-100' : 'hover:bg-gray-50'}>
                        <Link href={route(item.route)} className="flex items-center space-x-2 px-4 py-2">
                            <i className={item.icon + ' text-lg'}></i>
                            <div data-i18n={item.label}>{item.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}
