import TopHeader from '@/Components/layout/TopHeader.jsx'
import Footer from '@/Components/layout/Footer.jsx'
import Sidebar from '@/Components/layout/Sidebar.jsx'
import { useState } from 'react'

export default function Master({ children, header, user }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="flex min-h-screen flex-col">
            <div className="w-full flex-none">
                <TopHeader user={user} toggleMenu={toggleMenu} />
            </div>

            <div className="flex flex-grow">
                {/* Sidebar */}
                <Sidebar isOpen={menuOpen} />

                {/* Main Content */}
                <div className="flex w-full flex-grow flex-col pt-16 lg:ml-64">
                    <div className="container mx-auto flex-grow px-4 py-6">
                        {/*<h4 className="pt-4 text-2xl font-semibold">{header}</h4>*/}
                        {children}
                    </div>

                    <Footer />
                </div>

                {/* Overlay for mobile menu */}
                <div
                    className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                    onClick={toggleMenu}
                    aria-hidden="true"
                ></div>
            </div>
        </div>
    )
}
