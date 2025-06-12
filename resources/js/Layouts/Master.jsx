import TopHeader from '@/Components/layout/TopHeader.jsx'
import TopMenu from '@/Components/layout/TopMenu.jsx'
import Footer from '@/Components/layout/Footer.jsx'

export default function Master({ children, header, user }) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full">
                <TopHeader user={user} />

                <div className="w-full">
                    <div className="flex flex-col">
                        <TopMenu />

                        <div className="container mx-auto px-4 py-6 flex-grow">
                            {/*<h4 className="pt-4 text-2xl font-semibold">{header}</h4>*/}
                            {children}
                        </div>

                        <Footer />
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
