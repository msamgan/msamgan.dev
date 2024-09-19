import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import HeaderNotification from '@/Components/layout/HeaderNotification.jsx'

export default function TopHeaderRight({ user }) {
    return (
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <ul className="navbar-nav align-items-center ms-auto flex-row">
                <HeaderNotification user={user} />
                <TopHeaderDropdown user={user} />
            </ul>
        </div>
    )
}
