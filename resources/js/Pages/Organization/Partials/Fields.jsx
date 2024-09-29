import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors }) {
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
            <div className="col-6 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="text"
                        value={data.location}
                        onChange={(e) => setData('location', e.target.value)}
                        id="col-location"
                        placeholder="Location"
                        required={false}
                        isFocused={false}
                    />
                    <InputLabel htmlFor="col-location" required={false}>
                        Location
                    </InputLabel>
                    <InputError className="mt-2" message={errors.location} />
                </div>
            </div>
        </>
    )
}
