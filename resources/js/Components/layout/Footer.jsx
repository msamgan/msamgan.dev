export default function Footer() {
    return (
        <footer className="content-footer footer bg-footer-theme">
            <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between flex-md-row flex-column py-4">
                    <div className="text-body mb-md-0 mb-2">
                        ©{new Date().getFullYear()}, made with
                        <span className="text-danger ml-1 mr-2">
                            <i className="tf-icons ri-heart-fill"></i>
                        </span>
                        by
                        <a href="https://msamgan.com" target="_blank" className="footer-link ml-1">
                            msamgan
                        </a>
                    </div>
                    <div className="d-none d-lg-inline-block">
                        <a
                            href="https://demos.pixinvent.com/materialize-html-admin-template/documentation/"
                            target="_blank"
                            className="footer-link me-4"
                        >
                            Documentation
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
