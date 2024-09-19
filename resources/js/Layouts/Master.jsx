import TopHeader from '@/Components/layout/TopHeader.jsx'
import TopMenu from '@/Components/layout/TopMenu.jsx'
import Footer from '@/Components/layout/Footer.jsx'

export default function Master({ children, header, user }) {
    return (
        <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
            <div className="layout-container">
                <TopHeader user={user} />

                <div className="layout-page">
                    <div className="content-wrapper">
                        <TopMenu />

                        <div className="container-xxl flex-grow-1 container-p-y">
                            {/*<h4 className="pt-4 text-2xl font-semibold">{header}</h4>*/}
                            {children}
                        </div>

                        <Footer />
                        <div className="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
