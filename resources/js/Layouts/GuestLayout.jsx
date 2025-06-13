import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link } from '@inertiajs/react'

export default function Guest({ children }) {
    return (
        <div className="bg-gray-50 flex min-h-screen flex-col items-center justify-center px-4 py-8">
            <div className="mb-6 transition-transform duration-300 hover:scale-105">
                <Link href="/">
                    <ApplicationLogo className="h-16 w-auto" />
                </Link>
            </div>

            <div className="w-full max-w-md overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-10">
                {children}
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} msamgan. All rights reserved.
            </div>
        </div>
    )
}
