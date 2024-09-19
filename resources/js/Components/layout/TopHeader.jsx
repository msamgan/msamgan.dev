import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import ApplicationLogo from '@/Components/ApplicationLogo.jsx'
import TopHeaderRight from '@/Components/layout/TopHeaderRight.jsx'

export default function TopHeader({ user }) {
    return (
        <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
            <div className="container-xxl">
                <div className="navbar-brand app-brand demo d-none d-xl-flex me-6 py-0">
                    <a href="/" className="app-brand-link gap-2">
                        <span className="app-brand-logo demo">
                            <span
                                style={{
                                    color: 'var(--bs-primary)',
                                }}
                            >
                                <ApplicationLogo className="fill-current block h-9 w-auto text-gray-800" />
                            </span>
                        </span>
                        <div className={'flex flex-col space-y-1'}>
                            <span className="fw-light ml-4">
                                Welcome, {user.name} ({user.role.display_name})
                            </span>
                            <span className={'fw-light ml-4 text-sm'}>{user.business?.name}</span>
                        </div>
                    </a>

                    <a href="#" className="layout-menu-toggle menu-link text-large d-xl-none ms-auto">
                        <i className="ri-close-fill align-middle"></i>
                    </a>
                </div>

                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-xl-0 d-xl-none me-4">
                    <a className="nav-item nav-link me-xl-6 px-0" href="#">
                        <i className="ri-menu-fill ri-22px"></i>
                    </a>
                </div>

                <TopHeaderRight user={user} />
            </div>
        </nav>
    )
}
