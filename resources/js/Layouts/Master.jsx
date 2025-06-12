import TopHeader from '@/Components/layout/TopHeader.jsx'
import TopMenu from '@/Components/layout/TopMenu.jsx'
import Footer from '@/Components/layout/Footer.jsx'
import { useState } from 'react'

export default function Master({ children, header, user }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="flex min-h-screen flex-col">
            <div className="w-full">
                <TopHeader user={user} toggleMenu={toggleMenu} />

                <div className="w-full">
                    <div className="flex flex-col">
                        <TopMenu />

                        <div className="container mx-auto flex-grow px-4 py-6">
                            {/*<h4 className="pt-4 text-2xl font-semibold">{header}</h4>*/}
                            {children}
                        </div>

                        <Footer />
                        {/* Overlay for mobile menu */}
                        <div
                            className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                            onClick={toggleMenu}
                            aria-hidden="true"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
