import { useEffect, useState } from 'react'
import { Link } from '@inertiajs/react'
import { services } from '@/Utils/services/index.js'
import { cacheDuration } from '@/Utils/constants.js'

export default function Sidebar({ isOpen }) {
    const [menuItems, setMenuItems] = useState([])

    const getMenus = () => {
        let localStorageData = localStorage.getItem('menu')

        if (localStorageData) {
            localStorageData = JSON.parse(localStorageData)

            // If the data is less than an hour old, use it
            if (localStorageData.timestamp > new Date().getTime() - cacheDuration) {
                setMenuItems(localStorageData.menu)
                return
            }
        }

        axios
            .get(services.menu)
            .then((response) => {
                setMenuItems(response.data)
                localStorage.setItem(
                    'menu',
                    JSON.stringify({
                        menu: response.data,
                        timestamp: new Date().getTime(),
                    }),
                )
            })
            .catch((error) => {
                // console.log(error)
            })
    }

    useEffect(() => {
        getMenus()
    }, [])

    return (
        <aside
            id="layout-sidebar"
            className={`fixed left-0 top-0 z-30 h-full w-64 transform bg-white pt-16 shadow-md transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}
            style={{ paddingTop: '4rem' }}
        >
            <div className="h-full overflow-y-auto">
                <ul className="flex flex-col space-y-1 p-4">
                    <SidebarIndependentMenu
                        item={{ route: 'dashboard', icon: 'ri-home-smile-line', label: 'Dashboard' }}
                    />
                    {Object.keys(menuItems).map((itemKey, index) =>
                        itemKey === ''
                            ? menuItems[itemKey].map((item, index) => (
                                  <SidebarIndependentMenu key={index} item={item} />
                              ))
                            : menuItems[itemKey].length > 0 && (
                                  <SidebarDependentMenu key={index} menuItems={menuItems} itemKey={itemKey} />
                              ),
                    )}
                </ul>
            </div>
        </aside>
    )
}

// Sidebar version of IndependentMenu
function SidebarIndependentMenu({ item, index }) {
    return (
        <li
            key={index}
            className={
                route().current(item.route) ? 'bg-gray-50 border-l-4 border-primary' : 'border-transparent border-l-4'
            }
        >
            <Link
                href={route(item.route)}
                className={`hover:bg-gray-50 flex items-center space-x-3 px-4 py-3 text-gray-700 transition-colors duration-200 hover:text-primary ${
                    route().current(item.route) ? 'font-medium text-primary' : ''
                }`}
            >
                <i className={item.icon + ' text-lg opacity-80'}></i>
                <div data-i18n={item.label} className="font-medium">
                    {item.label}
                </div>
            </Link>
        </li>
    )
}

// Sidebar version of DependentMenu
function SidebarDependentMenu({ menuItems, itemKey, index }) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(
        menuItems[itemKey].map((item) => route().current(item.route)).includes(true),
    )

    return (
        <li
            key={index}
            className={
                menuItems[itemKey].map((item) => route().current(item.route)).includes(true)
                    ? 'bg-gray-50 border-l-4 border-primary'
                    : 'border-transparent border-l-4'
            }
        >
            <button
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                className="hover:bg-gray-50 flex w-full items-center justify-between px-4 py-3 text-gray-700 transition-colors duration-200 hover:text-primary"
            >
                <div className="flex items-center space-x-3">
                    <i className={menuItems[itemKey][0].parent.icon + ' text-lg opacity-80'}></i>
                    <div data-i18n={itemKey} className="font-medium">
                        {itemKey}
                    </div>
                </div>
                <i
                    className={`ri-arrow-down-s-line transform text-sm transition-transform duration-200 ${isSubmenuOpen ? 'rotate-180' : ''}`}
                ></i>
            </button>
            <ul className={`bg-gray-50 space-y-1 pl-10 ${isSubmenuOpen ? 'block' : 'hidden'}`}>
                {menuItems[itemKey].map((item, index) => (
                    <li key={index} className={route().current(item.route) ? 'bg-gray-100' : ''}>
                        <Link
                            href={route(item.route)}
                            className={`block py-2 text-sm text-gray-700 transition-colors duration-200 hover:text-primary ${
                                route().current(item.route) ? 'font-medium text-primary' : ''
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <i className={item.icon + ' text-lg opacity-80'}></i>
                                <div data-i18n={item.label}>{item.label}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    )
}
