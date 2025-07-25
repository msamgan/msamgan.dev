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
            <div className={`${w} fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-4 md:pl-10`}>
                <div
                    className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    id={id}
                >
                    <div className="flex h-full flex-col overflow-y-auto rounded-l-xl bg-white shadow-xl ring-1 ring-gray-200">
                        {/* Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
                            <h5 id={id + 'Label'} className="text-lg font-medium text-gray-800">
                                {title}
                            </h5>
                            <button
                                type="button"
                                className="rounded-full p-2 text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-1"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <span className="sr-only">Close panel</span>
                                <i className="ri-close-line text-sm text-gray-600" aria-hidden="true"></i>
                            </button>
                        </div>

                        {/* Body */}
                        <div className={`flex-1 overflow-y-auto p-6 ${childrenClass}`}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
