import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors, organizations, getOrganizations }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <div className="relative group">
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
                <div className="relative group">
                    <InputLabel
                        htmlFor="col-organization"
                        required={false}
                        className="mb-2"
                    >
                        Organization
                    </InputLabel>
                    <select
                        value={data.organization_id}
                        onChange={(e) => setData('organization_id', e.target.value)}
                        id="col-organization"
                        required={false}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20 mt-1"
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
                                className="text-gray-700 underline transition-colors duration-200 hover:text-black focus:outline-none"
                                onClick={getOrganizations}
                            >
                                click here
                            </button>{' '}
                            to refresh the list.
                        </span>
                        <a
                            target="_blank"
                            href={route('organization.index')}
                            className="mt-1 flex items-center text-gray-700 underline transition-colors duration-200 hover:text-black focus:outline-none sm:mt-0"
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
                <div className="relative group">
                    <InputLabel
                        htmlFor="col-emails"
                        required={false}
                        className="mb-2"
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
                    />
                    <InputError className="mt-2" message={errors.emails} />
                    <p className="mt-2 text-xs text-gray-500">Separate multiple emails with a comma.</p>
                </div>
            </div>
            <div className="w-full">
                <div className="relative group">
                    <InputLabel
                        htmlFor="col-phones"
                        required={false}
                        className="mb-2"
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
                    />
                    <InputError className="mt-2" message={errors.phones} />
                    <p className="mt-2 text-xs text-gray-500">Separate multiple phone numbers with a comma.</p>
                </div>
            </div>
        </div>
    )
}
