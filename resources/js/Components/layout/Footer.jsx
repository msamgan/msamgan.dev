export default function Footer() {
    return (
        <footer className="w-full border-t bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between py-4 md:flex-row">
                    <div className="mb-2 text-gray-700 md:mb-0">
                        ©{new Date().getFullYear()} made with
                        <span className="ml-1 mr-1 text-red-600">
                            <i className="ri-heart-fill"></i>
                        </span>
                        by
                        <a href="https://msamgan.com" target="_blank" className="ml-2 text-primary hover:underline">
                            msamgan
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
