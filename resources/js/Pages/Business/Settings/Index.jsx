import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import GeneralInfo from '@/Pages/Business/Settings/Partials/GeneralInfo.jsx'

export default function Index({ auth }) {
    return (
        <Master user={auth.user} header={'Business Settings'}>
            <Head title="Business Settings" />

            <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-full flex-shrink-0 md:w-64">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="border-b border-gray-200 px-6 py-5">
                            <h3 className="text-base font-medium text-gray-900">Settings</h3>
                        </div>
                        <nav className="flex flex-col p-4">
                            <a
                                className="flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-white"
                                href={route('business.settings')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-3 h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span>General Details</span>
                            </a>
                            {/*<a
                                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 mt-1"
                                href={route('business.settings')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span>Locations</span>
                            </a>
                            <a
                                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 mt-1"
                                href="#"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                                    <line x1="2" y1="10" x2="22" y2="10"></line>
                                </svg>
                                <span>Businesses</span>
                            </a>*/}
                        </nav>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <div className="border-b border-gray-200 px-6 py-5">
                            <h2 className="text-lg font-medium text-gray-900">General</h2>
                        </div>
                        <GeneralInfo business={auth.user.business} />
                    </div>
                </div>
            </div>
        </Master>
    )
}
