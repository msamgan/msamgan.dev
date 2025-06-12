export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 border-t">
            <div className="container mx-auto">
                <div className="flex items-center justify-between md:flex-row flex-col py-4">
                    <div className="text-gray-700 md:mb-0 mb-2">
                        ©{new Date().getFullYear()}, made with
                        <span className="text-red-600 ml-1 mr-2">
                            <i className="ri-heart-fill"></i>
                        </span>
                        by
                        <a href="https://msamgan.com" target="_blank" className="text-primary hover:underline ml-1">
                            msamgan
                        </a>
                    </div>
                    {import.meta.env.VITE_APP_ENV === 'local' && (
                        <div className="hidden lg:inline-block">
                            <a
                                href="https://demos.pixinvent.com/materialize-html-admin-template/documentation/"
                                target="_blank"
                                className="text-primary hover:underline mr-4"
                            >
                                Documentation
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    )
}
