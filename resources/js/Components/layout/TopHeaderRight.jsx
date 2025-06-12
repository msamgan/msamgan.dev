import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import HeaderNotification from '@/Components/layout/HeaderNotification.jsx'

export default function TopHeaderRight({ user }) {
    return (
        <div className="flex items-center" id="navbar-collapse">
            <ul className="flex items-center ml-auto flex-row">
                <HeaderNotification user={user} />
                <TopHeaderDropdown user={user} />
            </ul>
        </div>
    )
}
