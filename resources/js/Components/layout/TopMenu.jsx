import { useEffect, useState } from 'react'
import DependentMenu from '@/Components/layout/DependentMenu.jsx'
import IndependentMenu from '@/Components/layout/IndependentMenu.jsx'
import { services } from '@/Utils/services/index.js'
import { cacheDuration } from '@/Utils/constants.js'

export default function TopMenu() {
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
        <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
            <div className="container-xxl d-flex h-100">
                <ul className="menu-inner">
                    <IndependentMenu item={{ route: 'dashboard', icon: 'ri-home-smile-line', label: 'Dashboard' }} />
                    {Object.keys(menuItems).map((itemKey, index) =>
                        itemKey === ''
                            ? menuItems[itemKey].map((item, index) => <IndependentMenu key={index} item={item} />)
                            : menuItems[itemKey].length > 0 && (
                                  <DependentMenu key={index} menuItems={menuItems} itemKey={itemKey} />
                              ),
                    )}
                </ul>
            </div>
        </aside>
    )
}
