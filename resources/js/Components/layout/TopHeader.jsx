import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import ApplicationLogo from '@/Components/ApplicationLogo.jsx'
import TopHeaderRight from '@/Components/layout/TopHeaderRight.jsx'

export default function TopHeader({ user }) {
    return (
        <nav className="w-full bg-white shadow-md flex items-center" id="layout-navbar">
            <div className="container mx-auto px-4">
                <div className="hidden xl:flex items-center py-0 mr-6">
                    <a href="/" className="flex items-center gap-2">
                        <span className="block">
                            <span className="text-primary">
                                <ApplicationLogo className="fill-current block h-9 w-auto text-gray-800" />
                            </span>
                        </span>
                        <div className="flex flex-col space-y-1">
                            <span className="font-light ml-4">
                                Welcome, {user.name} ({user.role.display_name})
                            </span>
                            <span className="font-light ml-4 text-sm">{user.business?.name}</span>
                        </div>
                    </a>

                    <a href="#" className="hidden xl:block ml-auto text-xl">
                        <i className="ri-close-fill align-middle"></i>
                    </a>
                </div>

                <div className="xl:hidden flex items-center mr-4">
                    <a className="px-0 mr-6" href="#">
                        <i className="ri-menu-fill text-2xl"></i>
                    </a>
                </div>

                <TopHeaderRight user={user} />
            </div>
        </nav>
    )
}
