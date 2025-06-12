import ResponsiveNavLink from '@/Components/ResponsiveNavLink.jsx'
import { hasPermission } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'

export default function TopHeaderDropdown({ user }) {
    return (
        <li className="relative group">
            <a className="block" href="#" data-bs-toggle="dropdown">
                <div className="relative">
                    <img src="../../assets/img/avatars/1.png" alt="user-image" className="w-10 h-10 rounded-full object-cover" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                </div>
            </a>
            <ul className="hidden group-hover:block absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                <li>
                    <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                        <div className="flex">
                            <div className="mr-2 flex-shrink-0">
                                <div className="relative">
                                    <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="user-image"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <span className="font-medium block">{user.name}</span>
                                <span className="text-sm text-gray-500">{user.role.display_name}</span>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="border-t border-gray-100 my-1"></div>
                </li>
                <li>
                    <ResponsiveNavLink className="block px-4 py-2 hover:bg-gray-100 flex items-center" href={route('profile.edit')}>
                        <i className="ri-user-3-line mr-3"></i>
                        <span>My Profile</span>
                    </ResponsiveNavLink>
                </li>
                {user.business_id && hasPermission(user, permissions.business.update) && (
                    <li>
                        <ResponsiveNavLink className="block px-4 py-2 hover:bg-gray-100 flex items-center" href={route('business.settings')}>
                            <i className="ri-settings-3-line mr-3"></i>
                            <span>Business Settings</span>
                        </ResponsiveNavLink>
                    </li>
                )}
                {/*<li>
                            <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                                <span className="flex items-center">
                                    <i className="ri-file-text-line mr-3 flex-shrink-0"></i>
                                    <span className="flex-grow">Billing</span>
                                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">4</span>
                                </span>
                            </a>
                        </li>*/}
                <li>
                    <div className="border-t border-gray-100 my-1"></div>
                </li>
                <li>
                    <ResponsiveNavLink className="block px-4 py-2 hover:bg-gray-100 flex items-center" method="post" href={route('logout')} as="button">
                        <i className="ri-shut-down-line mr-3"></i>
                        <span>Log Out</span>
                    </ResponsiveNavLink>
                </li>
            </ul>
        </li>
    )
}
