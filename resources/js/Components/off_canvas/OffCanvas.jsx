import { useEffect, useState } from 'react'

export default function OffCanvas({ id, title, w = 'w-full sm:w-1/2', children, childrenClass = '', isOpen, onClose }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            document.body.style.overflow = 'hidden'
        } else {
            setTimeout(() => {
                setIsVisible(false)
                document.body.style.overflow = ''
            }, 300)
        }
    }, [isOpen])

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    if (!isVisible && !isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 overflow-hidden"
            aria-labelledby={id + 'Label'}
            role="dialog"
            aria-modal="true"
            onClick={handleBackdropClick}
        >
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden="true"
            ></div>

            {/* Panel */}
            <div className={`${w} fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-4 md:pl-10 bg-white`}>
                <div
                    className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    id={id}
                >
                    <div className="flex h-full flex-col overflow-y-auto rounded-lg bg-gray-50 shadow-md">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                            <h5 id={id + 'Label'} className="text-xl font-semibold text-gray-800">
                                {title}
                            </h5>
                            <button
                                type="button"
                                className="rounded-full p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <span className="sr-only">Close panel</span>
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className={`flex-1 overflow-y-auto p-6 space-y-4 ${childrenClass}`}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
