import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import ApplicationLogo from '@/Components/ApplicationLogo.jsx'
import TopHeaderRight from '@/Components/layout/TopHeaderRight.jsx'

export default function TopHeader({ user, toggleMenu }) {
    return (
        <nav className="flex w-full items-center bg-white py-2 shadow-md" id="layout-navbar">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <button
                        className="flex items-center justify-center rounded-md p-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary xl:hidden"
                        onClick={toggleMenu}
                        aria-expanded="false"
                        aria-label="Toggle menu"
                    >
                        <i className="ri-menu-line text-2xl"></i>
                    </button>

                    {/* Logo and welcome text - hidden on mobile, visible on xl */}
                    <div className="hidden items-center xl:flex">
                        <a href="/" className="flex items-center gap-2">
                            <span className="block">
                                <span className="text-primary">
                                    <ApplicationLogo className="fill-current block h-9 w-auto" />
                                </span>
                            </span>
                            <div className="flex flex-col space-y-1">
                                <span className="ml-4 font-light">
                                    Welcome, {user.name} ({user.role.display_name})
                                </span>
                                <span className="ml-4 text-sm font-light">{user.business?.name}</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right side components */}
                <TopHeaderRight user={user} />
            </div>
        </nav>
    )
}
