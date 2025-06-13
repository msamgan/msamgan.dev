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
                    ? 'group relative border-b-2 border-primary px-3 py-2.5'
                    : 'group relative px-3 py-2.5'
            }
        >
            <a href="#" className="flex cursor-pointer items-center space-x-2 text-gray-700 transition-colors duration-200 hover:text-primary">
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
                    className="font-medium"
                >
                    {itemKey}
                </div>
                <svg className="h-4 w-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </a>
            <ul className="absolute left-0 z-10 mt-1 hidden min-w-[220px] rounded-lg bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 group-[.open]:block">
                {menuItems[itemKey].map((item, index) => (
                    <li key={index} className={route().current(item.route) ? 'bg-gray-50' : ''}>
                        <Link
                            href={route(item.route)}
                            className={`flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-primary ${route().current(item.route) ? 'font-medium text-primary' : ''}`}
                        >
                            <i className={item.icon + ' text-lg opacity-80'}></i>
                            <div data-i18n={item.label}>{item.label}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}
