import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors, organizations, getOrganizations }) {
    return (
        <>
            <div className="col-6 col-md-6">
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
                    <select
                        value={data.organization_id}
                        onChange={(e) => setData('organization_id', e.target.value)}
                        id="col-organization"
                        required={false}
                        className="form-select"
                    >
                        <option value="">Select Organization</option>
                        {organizations.map((organization) => (
                            <option key={organization.id} value={organization.id}>
                                {organization.name}
                            </option>
                        ))}
                    </select>
                    <InputLabel htmlFor="col-organization" required={false}>
                        Organization
                    </InputLabel>
                    <InputError className="mt-2" message={errors.snake} />
                    <small className="text-muted flex justify-between">
                        <span className={'mt-2'}>
                            If the Organization is not listed, please{' '}
                            <a href="#" className={'text-blue-700'} onClick={getOrganizations}>
                                click here
                            </a>{' '}
                            to refresh the list.
                        </span>
                        <a target={'_blank'} href={route('organization.index')} className={'ml-5 mt-2 text-blue-700'}>
                            Add Organization
                        </a>
                    </small>
                </div>
            </div>
        </>
    )
}
