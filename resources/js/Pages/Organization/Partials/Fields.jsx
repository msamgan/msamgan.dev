import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'

export default function Fields({ data, setData, errors }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="w-full">
                <div className="relative group">
                    <InputLabel htmlFor="col-name" required={true} className="mb-2">
                        Name
                    </InputLabel>
                    <TextInput
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        id="col-name"
                        placeholder="Enter organization name"
                        required={true}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>
            </div>
            <div className="w-full">
                <div className="relative group">
                    <InputLabel htmlFor="col-location" required={false} className="mb-2">
                        Location
                    </InputLabel>
                    <TextInput
                        type="text"
                        value={data.location}
                        onChange={(e) => setData('location', e.target.value)}
                        id="col-location"
                        placeholder="Enter location"
                        required={false}
                        isFocused={false}
                    />
                    <InputError className="mt-2" message={errors.location} />
                </div>
            </div>
        </div>
    )
}
