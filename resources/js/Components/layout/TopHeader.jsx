import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import ApplicationLogo from '@/Components/ApplicationLogo.jsx'
import TopHeaderRight from '@/Components/layout/TopHeaderRight.jsx'

export default function TopHeader({ user, toggleMenu }) {
    return (
        <nav className="w-full bg-white shadow-md flex items-center py-2" id="layout-navbar">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <button
                        className="xl:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                        aria-expanded="false"
                        aria-label="Toggle menu"
                    >
                        <i className="ri-menu-line text-2xl"></i>
                    </button>

                    {/* Logo and welcome text - hidden on mobile, visible on xl */}
                    <div className="hidden xl:flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <span className="block">
                                <span className="text-primary">
                                    <ApplicationLogo className="fill-current block h-9 w-auto" />
                                </span>
                            </span>
                            <div className="flex flex-col space-y-1">
                                <span className="font-light ml-4">
                                    Welcome, {user.name} ({user.role.display_name})
                                </span>
                                <span className="font-light ml-4 text-sm">{user.business?.name}</span>
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
