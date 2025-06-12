export default function Actions({ edit, deleteAction }) {
    // Generate a unique ID for each dropdown to prevent conflicts
    const dropdownId = `action-dropdown-${Math.random().toString(36).substr(2, 9)}`;

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        const menu = document.getElementById(dropdownId);
        menu.classList.toggle('hidden');

        // Close dropdown when clicking outside
        const handleOutsideClick = (event) => {
            if (!event.target.closest(`.action-container-${dropdownId}`)) {
                menu.classList.add('hidden');
                document.removeEventListener('click', handleOutsideClick);
            }
        };

        // Add event listener with a slight delay to prevent immediate triggering
        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
        }, 100);
    };

    return (
        <div className={`relative inline-block text-left action-container-${dropdownId}`}>
            <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
                    id={`action-menu-button-${dropdownId}`}
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-label="Action menu"
                    onClick={toggleDropdown}
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                    </svg>
                </button>
            </div>
            <div
                id={dropdownId}
                className="hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100"
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
