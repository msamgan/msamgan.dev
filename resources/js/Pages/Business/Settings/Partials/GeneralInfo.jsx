import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import { useForm } from '@inertiajs/react'
import { currencies, timeZones, unitSystems, weightUnits } from '@/Utils/constants.js'
import InputError from '@/Components/InputError.jsx'
import { Transition } from '@headlessui/react'
import { routes } from '@/Utils/routes/index.js'
import PrimaryButton from '@/Components/PrimaryButton.jsx'

export default function GeneralInfo({ business }) {
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: business.name,
        country: business.country,
        address: business.address,
        city: business.city,
        state: business.state,
        zip: business.zip,
        timezone: business.timezone,
        unit_system: business.unit_system,
        weight_unit: business.weight_unit,
        currency: business.currency,
    })

    const submit = (e) => {
        e.preventDefault()

        post(routes.business.update(business.id))
    }

    return (
        <form onSubmit={submit} className="space-y-8 p-6">
            {/* General Information Section */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-base font-medium text-gray-900">General Information</h3>
                    <p className="mt-1 text-sm text-gray-500">Basic information about your business.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="w-full">
                        <div className="group relative">
                            <InputLabel htmlFor="business-name" required={true} className="mb-2">
                                Legal Business Name
                            </InputLabel>
                            <TextInput
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                id="business-name"
                                placeholder="Enter business name"
                            />
                            <InputError className="mt-2" message={errors.name} />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="group relative">
                            <InputLabel htmlFor="country_region" required={true} className="mb-2">
                                Country/Region
                            </InputLabel>
                            <select
                                id="country_region"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                                value={data.country}
                                onChange={(e) => setData('country', e.target.value)}
                            >
                                <option value="US">United States</option>
                            </select>
                            <InputError className="mt-2" message={errors.country} />
                        </div>
                    </div>

                    <div className="w-full md:col-span-2">
                        <div className="group relative">
                            <InputLabel htmlFor="bill_address" className="mb-2">
                                Address
                            </InputLabel>
                            <TextInput
                                type="text"
                                id="bill_address"
                                placeholder="Enter address"
                                value={data.address}
                                onChange={(e) => setData('address', e.target.value)}
                            />
                            <InputError className="mt-2" message={errors.address} />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="group relative">
                            <InputLabel htmlFor="bill_city" className="mb-2">
                                City
                            </InputLabel>
                            <TextInput
                                type="text"
                                id="bill_city"
                                placeholder="Enter city"
                                value={data.city}
                                onChange={(e) => setData('city', e.target.value)}
                            />
                            <InputError className="mt-2" message={errors.city} />
                        </div>
                    </div>

                    <div className="w-full md:col-span-1">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="group relative">
                                <InputLabel htmlFor="bill_state" className="mb-2">
                                    State
                                </InputLabel>
                                <TextInput
                                    type="text"
                                    id="bill_state"
                                    value={data.state}
                                    onChange={(e) => setData('state', e.target.value)}
                                    placeholder="Enter state"
                                />
                                <InputError className="mt-2" message={errors.state} />
                            </div>

                            <div className="group relative">
                                <InputLabel htmlFor="bill_pincode" className="mb-2">
                                    ZIP Code
                                </InputLabel>
                                <TextInput
                                    type="number"
                                    id="bill_pincode"
                                    placeholder="Enter ZIP code"
                                    min="0"
                                    max="999999"
                                    value={data.zip}
                                    onChange={(e) => setData('zip', e.target.value)}
                                />
                                <InputError className="mt-2" message={errors.zip} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6"></div>

            {/* Time Zone and Units Section */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-base font-medium text-gray-900">Time Zone and Units of Measurement</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        Used to calculate product prices, shipping weights, and order times.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="w-full">
                        <div className="group relative">
                            <InputLabel htmlFor="timeZones" required={true} className="mb-2">
                                Time Zone
                            </InputLabel>
                            <select
                                id="timeZones"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                                value={data.timezone}
                                onChange={(e) => setData('timezone', e.target.value)}
                            >
                                {timeZones.map((zone, index) => (
                                    <option key={index} value={zone.value}>
                                        {zone.label}
                                    </option>
                                ))}
                            </select>
                            <InputError className="mt-2" message={errors.timezone} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="group relative">
                            <InputLabel htmlFor="unitSystemDropdown" required={true} className="mb-2">
                                Unit System
                            </InputLabel>
                            <select
                                id="unitSystemDropdown"
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                                value={data.unit_system}
                                onChange={(e) => setData('unit_system', e.target.value)}
                            >
                                {unitSystems.map((unit, index) => (
                                    <option key={index} value={unit.value}>
                                        {unit.label}
                                    </option>
                                ))}
                            </select>
                            <InputError className="mt-2" message={errors.unit_system} />
                        </div>

                        <div className="group relative">
                            <InputLabel htmlFor="weightUnits" required={true} className="mb-2">
                                Weight Unit
                            </InputLabel>
                            <select
                                id="weightUnits"
                                onChange={(e) => setData('weight_unit', e.target.value)}
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                                value={data.weight_unit}
                            >
                                {weightUnits.map((unit, index) => (
                                    <option key={index} value={unit.value}>
                                        {unit.label}
                                    </option>
                                ))}
                            </select>
                            <InputError className="mt-2" message={errors.weight_unit} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6"></div>

            {/* Currency Section */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-base font-medium text-gray-900">Store Currency</h3>
                    <p className="mt-1 text-sm text-gray-500">The currency your products are sold in.</p>
                </div>

                <div className="w-full max-w-md">
                    <div className="group relative">
                        <InputLabel htmlFor="currency-store" required={true} className="mb-2">
                            Currency
                        </InputLabel>
                        <select
                            id="currency-store"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                            value={data.currency}
                            onChange={(e) => setData('currency', e.target.value)}
                        >
                            {currencies.map((currency, index) => (
                                <option key={index} value={currency.value}>
                                    {currency.label}
                                </option>
                            ))}
                        </select>
                        <InputError className="mt-2" message={errors.currency} />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6"></div>

            <div className="flex items-center justify-end gap-4">
                <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    )
}
