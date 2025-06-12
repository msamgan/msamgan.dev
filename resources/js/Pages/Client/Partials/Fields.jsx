import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors, organizations, getOrganizations }) {
    return (
        <>
            <div className="w-full">
                <div className="relative">
                    <InputLabel htmlFor="col-name" required={true} className="mb-1 text-sm font-medium text-gray-700">
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
                        className="w-full rounded-lg border-gray-300 shadow-sm transition-colors duration-200 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
            </div>
            <div className="w-full">
                <div className="relative">
                    <select
                        value={data.organization_id}
                        onChange={(e) => setData('organization_id', e.target.value)}
                        id="col-organization"
                        required={false}
                        className="w-full rounded-lg border-gray-300 shadow-sm transition-colors duration-200 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20"
                    >
                        <option value="">Select Organization</option>
                        {organizations.map((organization) => (
                            <option key={organization.id} value={organization.id}>
                                {organization.name}
                            </option>
                        ))}
                    </select>
                    <InputLabel
                        htmlFor="col-organization"
                        required={false}
                        className="mb-1 text-sm font-medium text-gray-700"
                    >
                        Organization
                    </InputLabel>
                    <InputError className="mt-2" message={errors.organization_id} />
                    <div className="mt-2 flex flex-wrap items-center justify-between text-xs text-gray-500">
                        <span className="flex-grow">
                            If the Organization is not listed, please{' '}
                            <button
                                type="button"
                                className="text-primary underline transition-colors duration-200 hover:text-secondary focus:outline-none"
                                onClick={getOrganizations}
                            >
                                click here
                            </button>{' '}
                            to refresh the list.
                        </span>
                        <a
                            target="_blank"
                            href={route('organization.index')}
                            className="mt-1 flex items-center text-primary underline transition-colors duration-200 hover:text-secondary focus:outline-none sm:mt-0"
                        >
                            <svg
                                className="mr-1 h-4 w-4"
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
                <div className="relative">
                    <InputLabel
                        htmlFor="col-emails"
                        required={false}
                        className="mb-1 text-sm font-medium text-gray-700"
                    >
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
                        className="w-full rounded-lg border-gray-300 shadow-sm transition-colors duration-200 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20"
                    />
                    <InputError className="mt-2" message={errors.emails} />
                    <p className="mt-1.5 text-xs text-gray-500">Separate multiple emails with a comma.</p>
                </div>
            </div>
            <div className="w-full">
                <div className="relative">
                    <InputLabel
                        htmlFor="col-phones"
                        required={false}
                        className="mb-1 text-sm font-medium text-gray-700"
                    >
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
                        className="w-full rounded-lg border-gray-300 shadow-sm transition-colors duration-200 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20"
                    />
                    <InputError className="mt-2" message={errors.phones} />
                    <p className="mt-1.5 text-xs text-gray-500">Separate multiple phone numbers with a comma.</p>
                </div>
            </div>
        </>
    )
}
