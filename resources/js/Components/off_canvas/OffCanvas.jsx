import { useEffect, useState } from 'react'

export default function OffCanvas({ id, title, w = 'w-full sm:w-[90%] md:w-[75%] lg:w-[50%] xl:w-[40%] 2xl:w-[600px]', children, childrenClass = '', isOpen, onClose }) {
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
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-4 md:pl-10">
                <div
                    className={`${w} transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    id={id}
                >
                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-6">
                            <h5 id={id + 'Label'} className="text-2xl font-medium text-gray-900">
                                {title}
                            </h5>
                            <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <span className="sr-only">Close panel</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className={`flex-1 overflow-y-auto p-6 ${childrenClass}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
