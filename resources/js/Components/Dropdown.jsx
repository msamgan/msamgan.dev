import { useState, createContext, useContext } from 'react'
import { Link } from '@inertiajs/react'
import { Transition } from '@headlessui/react'

const DropDownContext = createContext()

const Dropdown = ({ children }) => {
    const [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen((previousState) => !previousState)
    }

    return (
        <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </DropDownContext.Provider>
    )
}

const Trigger = ({ children }) => {
    const { open, setOpen, toggleOpen } = useContext(DropDownContext)

    return (
        <>
            <div onClick={toggleOpen}>{children}</div>

            {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
        </>
    )
}

const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }) => {
    const { open, setOpen } = useContext(DropDownContext)

    let alignmentClasses = 'origin-top'

    if (align === 'left') {
        alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0'
    } else if (align === 'right') {
        alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0'
    }

    let widthClasses = ''

    if (width === '48') {
        widthClasses = 'w-48'
    }

    return (
        <>
            <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div
                    className={`absolute z-50 mt-2 rounded-md shadow-md ${alignmentClasses} ${widthClasses}`}
                    onClick={() => setOpen(false)}
                >
                    <div className={`rounded-md border border-gray-200 ` + contentClasses}>{children}</div>
                </div>
            </Transition>
        </>
    )
}

const DropdownLink = ({ className = '', children, ...props }) => {
    return (
        <Link
            {...props}
            className={
                'hover:bg-gray-50 focus:bg-gray-50 block w-full px-4 py-2 text-start text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 ' +
                className
            }
        >
            {children}
        </Link>
    )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink

export default Dropdown
