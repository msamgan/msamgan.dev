import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import ApplicationLogo from '@/Components/ApplicationLogo.jsx'
import TopHeaderRight from '@/Components/layout/TopHeaderRight.jsx'

export default function TopHeader({ user, toggleMenu }) {
    return (
        <nav className="fixed top-0 z-40 flex w-full items-center bg-white py-2 shadow-md" id="layout-navbar">
            <div className="flex w-full items-center justify-between px-4">
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <button
                        className="mr-3 flex items-center justify-center rounded-md p-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
                        onClick={toggleMenu}
                        aria-expanded="false"
                        aria-label="Toggle menu"
                    >
                        <i className="ri-menu-line text-sm"></i>
                    </button>

                    {/* Logo visible on all screens, welcome text only on xl */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <span className="block">
                                <span className="text-primary">
                                    <ApplicationLogo className="fill-current block h-9 w-auto" />
                                </span>
                            </span>
                            <div className="hidden flex-col space-y-1 xl:flex">
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
