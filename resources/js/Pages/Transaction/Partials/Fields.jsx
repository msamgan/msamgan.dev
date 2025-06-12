import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors, projects, getProjects, descriptions }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <div className="relative group">
                    <InputLabel htmlFor="col-type" required={true} className="mb-2">
                        Type
                    </InputLabel>
                    <select
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                        id="col-type"
                        required={true}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20 mt-1"
                    >
                        <option value="">Select Type</option>
                        <option value="incoming">Incoming</option>
                        <option value="outgoing">Outgoing</option>
                    </select>
                    <InputError className="mt-2" message={errors.type} />
                </div>
            </div>
            <div className="w-full">
                <div className="relative group">
                    <InputLabel htmlFor="col-project" required={false} className="mb-2">
                        Project
                    </InputLabel>
                    <select
                        value={data.project_id}
                        onChange={(e) => setData('project_id', e.target.value)}
                        id="col-project"
                        required={false}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring focus:ring-primary/20 mt-1"
                    >
                        <option value="">Select Project</option>
                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.name}
                            </option>
                        ))}
                    </select>
                    <InputError className="mt-2" message={errors.project_id} />
                    <div className="mt-2 flex flex-wrap items-center justify-between text-xs text-gray-500">
                        <span className="flex-grow">
                            If the Project is not listed, please{' '}
                            <button
                                type="button"
                                className="text-gray-700 underline transition-colors duration-200 hover:text-black focus:outline-none"
                                onClick={getProjects}
                            >
                                click here
                            </button>{' '}
                            to refresh the list.
                        </span>
                        <a
                            target="_blank"
                            href={route('project.index')}
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
                            Add Project
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="relative group">
                    <InputLabel htmlFor="col-description" required={false} className="mb-2">
                        Description
                    </InputLabel>
                    <TextInput
                        type="text"
                        list="DescriptionList"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        id="col-description"
                        placeholder="Enter transaction description"
                        required={false}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.description} />
                </div>

                <datalist name="Description" id="DescriptionList">
                    {descriptions.map((description, index) => (
                        <option key={index} value={description}>
                            {description}
                        </option>
                    ))}
                </datalist>
            </div>
            <div className="flex flex-wrap gap-6">
                <div className="w-full md:w-[calc(50%-12px)]">
                    <div className="relative group">
                        <InputLabel htmlFor="col-amount" required={true} className="mb-2">
                            Amount
                        </InputLabel>
                        <TextInput
                            type="number"
                            value={data.amount}
                            onChange={(e) => setData('amount', e.target.value)}
                            id="col-amount"
                            placeholder="Enter amount"
                            required={true}
                            isFocused={false}
                        />
                        <InputError className="mt-2" message={errors.amount} />
                    </div>
                </div>
                <div className="w-full md:w-[calc(50%-12px)]">
                    <div className="relative group">
                        <InputLabel htmlFor="col-date" required={true} className="mb-2">
                            Date
                        </InputLabel>
                        <TextInput
                            type="date"
                            value={data.date}
                            onChange={(e) => setData('date', e.target.value)}
                            id="col-date"
                            placeholder="Select date"
                            required={true}
                            isFocused={false}
                        />
                        <InputError className="mt-2" message={errors.date} />
                    </div>
                </div>
            </div>
        </div>
    )
}
