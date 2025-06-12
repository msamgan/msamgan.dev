import TopHeaderDropdown from '@/Components/layout/TopHeaderDropdown.jsx'
import HeaderNotification from '@/Components/layout/HeaderNotification.jsx'

export default function TopHeaderRight({ user }) {
    return (
        <div className="flex items-center justify-end" aria-label="User navigation">
            <ul className="flex items-center space-x-2">
                <HeaderNotification user={user} />
                <TopHeaderDropdown user={user} />
            </ul>
        </div>
    )
}
