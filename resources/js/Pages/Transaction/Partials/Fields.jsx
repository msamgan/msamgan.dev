import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors, projects, getProjects, descriptions }) {
    return (
        <>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <select
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                        id="col-type"
                        required={true}
                        className="form-select rounded-md pb-2"
                    >
                        <option value="">Select Type</option>
                        <option value="incoming">Incoming</option>
                        <option value="outgoing">Outgoing</option>
                    </select>
                    <InputLabel htmlFor="col-type" required={true}>
                        Type
                    </InputLabel>
                    <InputError className="mt-2" message={errors.type} />
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <select
                        value={data.project_id}
                        onChange={(e) => setData('project_id', e.target.value)}
                        id="col-project"
                        required={false}
                        className="form-select rounded-md pb-2"
                    >
                        <option value="">Select Project</option>
                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.name}
                            </option>
                        ))}
                    </select>
                    <InputLabel htmlFor="col-project" required={false}>
                        Project
                    </InputLabel>
                    <InputError className="mt-2" message={errors.project_id} />
                    <small className="text-muted flex justify-between">
                        <span className={'mt-2'}>
                            If the Project is not listed, please{' '}
                            <a href="#" className={'text-blue-700'} onClick={getProjects}>
                                click here
                            </a>{' '}
                            to refresh the list.
                        </span>
                        <a target={'_blank'} href={route('project.index')} className={'ml-5 mt-2 text-blue-700'}>
                            Add Project
                        </a>
                    </small>
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="text"
                        list="DescriptionList"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        id="col-description"
                        placeholder="Description"
                        required={false}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-description" required={false}>
                        Description
                    </InputLabel>
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
            <div className="col-6 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="number"
                        value={data.amount}
                        onChange={(e) => setData('amount', e.target.value)}
                        id="col-amount"
                        placeholder="Amount"
                        required={true}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-amount" required={true}>
                        Amount
                    </InputLabel>
                    <InputError className="mt-2" message={errors.amount} />
                </div>
            </div>

            <div className="col-6 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="date"
                        value={data.date}
                        onChange={(e) => setData('date', e.target.value)}
                        id="col-date"
                        placeholder="Date"
                        required={true}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-date" required={true}>
                        Date
                    </InputLabel>
                    <InputError className="mt-2" message={errors.date} />
                </div>
            </div>
        </>
    )
}
