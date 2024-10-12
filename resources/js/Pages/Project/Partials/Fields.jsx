import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import { projectStatuses } from '@/Utils/constants.js'

export default function Fields({ data, setData, errors, clients, getClients }) {
    return (
        <>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <select
                        value={data.client_id}
                        onChange={(e) => setData('client_id', e.target.value)}
                        id="col-client"
                        required={true}
                        className="form-select rounded-md pb-2"
                    >
                        <option value="">Select Client</option>
                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.name}
                            </option>
                        ))}
                    </select>
                    <InputLabel htmlFor="col-client" required={true}>
                        Client
                    </InputLabel>
                    <InputError className="mt-2" message={errors.client_id} />
                    <small className="text-muted flex justify-between">
                        <span className={'mt-2'}>
                            If the Client is not listed, please{' '}
                            <a href="#" className={'text-blue-700'} onClick={getClients}>
                                click here
                            </a>{' '}
                            to refresh the list.
                        </span>
                        <a target={'_blank'} href={route('client.index')} className={'ml-5 mt-2 text-blue-700'}>
                            Add Client
                        </a>
                    </small>
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        id="col-name"
                        placeholder="Name"
                        required={true}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-name" required={true}>
                        Name
                    </InputLabel>
                    <InputError className="mt-2" message={errors.name} />
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        id="col-description"
                        placeholder="Description"
                        required={false}
                        className={'form-control'}
                    />
                    <InputLabel htmlFor="col-description" required={false}>
                        Description
                    </InputLabel>
                    <InputError className="mt-2" message={errors.description} />
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="url"
                        value={data.document_url}
                        onChange={(e) => setData('document_url', e.target.value)}
                        id="col-document_url"
                        placeholder="Document Url"
                        required={false}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-document_url" required={false}>
                        Document Url
                    </InputLabel>
                    <InputError className="mt-2" message={errors.document_url} />
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-floating form-floating-outline">
                    <select
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        id="col-status"
                        required={true}
                        className="form-select rounded-md pb-2"
                    >
                        <option value="">Select Status</option>
                        {projectStatuses.map((status, index) => (
                            <option key={index} value={status.key}>
                                {status.value}
                            </option>
                        ))}
                    </select>
                    <InputLabel htmlFor="col-status" required={true}>
                        Status
                    </InputLabel>
                    <InputError className="mt-2" message={errors.status} />
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="number"
                        value={data.costing}
                        onChange={(e) => setData('costing', e.target.value)}
                        id="col-costing"
                        placeholder="Costing"
                        required={true}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-costing" required={true}>
                        Costing
                    </InputLabel>
                    <InputError className="mt-2" message={errors.costing} />
                </div>
            </div>
            <div className="col-4 col-md-4">
                <div className="form-floating form-floating-outline">
                    <select
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                        id="col-type"
                        required={true}
                        className="form-select rounded-md pb-2"
                    >
                        <option value="">Select Type</option>
                        <option value="singular">Singular</option>
                        <option value="recurring">Recurring</option>
                    </select>
                    <InputLabel htmlFor="col-type" required={true}>
                        Type
                    </InputLabel>
                    <InputError className="mt-2" message={errors.type} />
                </div>
            </div>
            <div className="col-6 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        id="start_date"
                        type={'date'}
                        value={data.start_date}
                        onChange={(e) => setData('start_date', e.target.value)}
                    />
                    <InputLabel htmlFor="start_date" value="Start Date" />
                    <InputError className="mt-2" message={errors.start_date} />
                </div>
            </div>
            <div className="col-6 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        id="end_date"
                        type={'date'}
                        value={data.end_date}
                        onChange={(e) => setData('end_date', e.target.value)}
                    />
                    <InputLabel htmlFor="end_date" value="End Date" />
                    <InputError className="mt-2" message={errors.end_date} />
                </div>
            </div>
        </>
    )
}
