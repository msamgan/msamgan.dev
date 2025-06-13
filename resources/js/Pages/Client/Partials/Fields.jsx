import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors, organizations, getOrganizations }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-name" required={true} className="mb-4">
                        Name
                    </InputLabel>
                    <TextInput
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        id="col-name"
                        placeholder="Enter client name"
                        required={true}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-organization" required={false} className="mb-2">
                        Organization
                    </InputLabel>
                    <select
                        value={data.organization_id}
                        onChange={(e) => setData('organization_id', e.target.value)}
                        id="col-organization"
                        required={false}
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                    >
                        <option value="">Select Organization</option>
                        {organizations.map((organization) => (
                            <option key={organization.id} value={organization.id}>
                                {organization.name}
                            </option>
                        ))}
                    </select>
                    <InputError className="mt-2" message={errors.organization_id} />
                    <div className="mt-2 flex flex-wrap items-center justify-between text-xs text-gray-500">
                        <span className="flex-grow">
                            If the Organization is not listed, please{' '}
                            <button
                                type="button"
                                className="font-medium text-primary transition-colors duration-200 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                                onClick={getOrganizations}
                            >
                                click here
                            </button>{' '}
                            to refresh the list.
                        </span>
                        <a
                            target="_blank"
                            href={route('organization.index')}
                            className="bg-gray-50 mt-1 flex items-center rounded-md px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:mt-0"
                        >
                            <svg
                                className="mr-1.5 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                            </svg>
                            Add Organization
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-emails" required={false} className="mb-2">
                        Emails
                    </InputLabel>
                    <TextInput
                        type="text"
                        value={data.emails}
                        onChange={(e) => setData('emails', e.target.value)}
                        id="col-emails"
                        placeholder="Enter email addresses"
                        required={false}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.emails} />
                    <p className="mt-2 flex items-center text-xs text-gray-500">
                        <svg
                            className="mr-1.5 h-4 w-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        Separate multiple emails with a comma.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-phones" required={false} className="mb-2">
                        Phones
                    </InputLabel>
                    <TextInput
                        type="text"
                        value={data.phones}
                        onChange={(e) => setData('phones', e.target.value)}
                        id="col-phones"
                        placeholder="Enter phone numbers"
                        required={false}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.phones} />
                    <p className="mt-2 flex items-center text-xs text-gray-500">
                        <svg
                            className="mr-1.5 h-4 w-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        Separate multiple phone numbers with a comma.
                    </p>
                </div>
            </div>
        </div>
    )
}
