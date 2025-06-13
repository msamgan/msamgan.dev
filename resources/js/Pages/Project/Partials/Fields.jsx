import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import { projectStatuses } from '@/Utils/constants.js'

export default function Fields({ data, setData, errors, clients, getClients }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-client" required={true} className="mb-2">
                        Client
                    </InputLabel>
                    <select
                        value={data.client_id}
                        onChange={(e) => setData('client_id', e.target.value)}
                        id="col-client"
                        required={true}
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20"
                    >
                        <option value="">Select Client</option>
                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.name}
                            </option>
                        ))}
                    </select>
                    <InputError className="mt-2" message={errors.client_id} />
                    <div className="mt-2 flex flex-wrap items-center justify-between text-xs text-gray-500">
                        <span className="flex-grow">
                            If the Client is not listed, please{' '}
                            <button
                                type="button"
                                className="text-gray-700 underline transition-colors duration-200 hover:text-black focus:outline-none"
                                onClick={getClients}
                            >
                                click here
                            </button>{' '}
                            to refresh the list.
                        </span>
                        <a
                            target="_blank"
                            href={route('client.index')}
                            className="mt-1 flex items-center text-gray-700 underline transition-colors duration-200 hover:text-black focus:outline-none sm:mt-0"
                        >
                            <i className="ri-add-line mr-2 text-sm text-gray-600"></i>
                            Add Client
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-name" required={true} className="mb-2">
                        Name
                    </InputLabel>
                    <TextInput
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        id="col-name"
                        placeholder="Enter project name"
                        required={true}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-description" required={false} className="mb-2">
                        Description
                    </InputLabel>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        id="col-description"
                        placeholder="Enter project description"
                        required={false}
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20"
                    />
                    <InputError className="mt-2" message={errors.description} />
                </div>
            </div>
            <div className="w-full">
                <div className="group relative">
                    <InputLabel htmlFor="col-document_url" required={false} className="mb-2">
                        Document URL
                    </InputLabel>
                    <TextInput
                        type="url"
                        value={data.document_url}
                        onChange={(e) => setData('document_url', e.target.value)}
                        id="col-document_url"
                        placeholder="Enter document URL"
                        required={false}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.document_url} />
                </div>
            </div>
            <div className="flex flex-wrap gap-6">
                <div className="w-full md:w-[calc(33.333%-16px)]">
                    <div className="group relative">
                        <InputLabel htmlFor="col-status" required={true} className="mb-2">
                            Status
                        </InputLabel>
                        <select
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            id="col-status"
                            required={true}
                            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20"
                        >
                            <option value="">Select Status</option>
                            {projectStatuses.map((status, index) => (
                                <option key={index} value={status.key}>
                                    {status.value}
                                </option>
                            ))}
                        </select>
                        <InputError className="mt-2" message={errors.status} />
                    </div>
                </div>
                <div className="w-full md:w-[calc(33.333%-16px)]">
                    <div className="group relative">
                        <InputLabel htmlFor="col-costing" required={true} className="mb-2">
                            Costing
                        </InputLabel>
                        <TextInput
                            type="number"
                            value={data.costing}
                            onChange={(e) => setData('costing', e.target.value)}
                            id="col-costing"
                            placeholder="Enter project cost"
                            required={true}
                            isFocused={false}
                        />
                        <InputError className="mt-2" message={errors.costing} />
                    </div>
                </div>
                <div className="w-full md:w-[calc(33.333%-16px)]">
                    <div className="group relative">
                        <InputLabel htmlFor="col-type" required={true} className="mb-2">
                            Type
                        </InputLabel>
                        <select
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            id="col-type"
                            required={true}
                            className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20"
                        >
                            <option value="">Select Type</option>
                            <option value="singular">Singular</option>
                            <option value="recurring">Recurring</option>
                        </select>
                        <InputError className="mt-2" message={errors.type} />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-6">
                <div className="w-full md:w-[calc(50%-12px)]">
                    <div className="group relative">
                        <InputLabel htmlFor="start_date" required={false} className="mb-2">
                            Start Date
                        </InputLabel>
                        <TextInput
                            id="start_date"
                            type="date"
                            value={data.start_date}
                            onChange={(e) => setData('start_date', e.target.value)}
                            placeholder="Select start date"
                        />
                        <InputError className="mt-2" message={errors.start_date} />
                    </div>
                </div>
                <div className="w-full md:w-[calc(50%-12px)]">
                    <div className="group relative">
                        <InputLabel htmlFor="end_date" required={false} className="mb-2">
                            End Date
                        </InputLabel>
                        <TextInput
                            id="end_date"
                            type="date"
                            value={data.end_date}
                            onChange={(e) => setData('end_date', e.target.value)}
                            placeholder="Select end date"
                        />
                        <InputError className="mt-2" message={errors.end_date} />
                    </div>
                </div>
            </div>
        </div>
    )
}
