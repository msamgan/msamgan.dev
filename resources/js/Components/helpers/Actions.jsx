export default function Actions({ edit, deleteAction }) {
    // Generate a unique ID for each dropdown to prevent conflicts
    const dropdownId = `action-dropdown-${Math.random().toString(36).substr(2, 9)}`

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        const menu = document.getElementById(dropdownId)
        menu.classList.toggle('hidden')

        // Close dropdown when clicking outside
        const handleOutsideClick = (event) => {
            if (!event.target.closest(`.action-container-${dropdownId}`)) {
                menu.classList.add('hidden')
                document.removeEventListener('click', handleOutsideClick)
            }
        }

        // Add event listener with a slight delay to prevent immediate triggering
        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick)
        }, 100)
    }

    return (
        <div className={`relative inline-block text-left action-container-${dropdownId}`}>
            <div>
                <button
                    type="button"
                    className="hover:bg-gray-50 inline-flex items-center justify-center rounded-full p-2 text-gray-400 transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    id={`action-menu-button-${dropdownId}`}
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-label="Action menu"
                    onClick={toggleDropdown}
                >
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                    </svg>
                </button>
            </div>
            <div
                id={dropdownId}
                className="absolute right-0 z-10 mt-2 hidden w-48 origin-top-right rounded-lg bg-white shadow-md ring-1 ring-gray-200 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby={`action-menu-button-${dropdownId}`}
                tabIndex="-1"
            >
                <div className="py-1" role="none">
                    {edit}
                    {deleteAction}
                </div>
            </div>
        </div>
    )
}
