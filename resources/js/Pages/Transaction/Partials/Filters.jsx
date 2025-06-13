import { useState } from 'react'
import PrimaryButton from '@/Components/PrimaryButton.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import TextInput from '@/Components/TextInput.jsx'

export default function Filters({ params }) {
    const [search, setSearch] = useState(params.get('q'))
    const [type, setType] = useState(params.get('type'))
    const [startDate, setStartDate] = useState(params.get('start-date'))
    const [endDate, setEndDate] = useState(params.get('end-date'))

    return (
        <div className="p-4">
            <form className="flex flex-wrap items-end gap-4">
                <div className="w-full max-w-xs">
                    <div className="group relative">
                        <InputLabel htmlFor="col-start-date" required={false} className="mb-1">
                            Start Date
                        </InputLabel>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            id="col-start-date"
                            placeholder="Start Date"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                            name="start-date"
                        />
                    </div>
                </div>
                <div className="w-full max-w-xs">
                    <div className="group relative">
                        <InputLabel htmlFor="col-end-date" required={false} className="mb-1">
                            End Date
                        </InputLabel>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            id="col-end-date"
                            placeholder="End Date"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                            name="end-date"
                        />
                    </div>
                </div>
                <div className="w-full max-w-xs">
                    <div className="group relative">
                        <InputLabel htmlFor="col-type" required={false} className="mb-1">
                            Type
                        </InputLabel>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            id="col-type"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                            name="type"
                        >
                            <option value="">Select Type</option>
                            <option value="incoming">Incoming</option>
                            <option value="outgoing">Outgoing</option>
                        </select>
                    </div>
                </div>
                <div className="w-full max-w-xs">
                    <div className="group relative">
                        <InputLabel htmlFor="search" required={false} className="mb-1">
                            Search
                        </InputLabel>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                <i className="ri-search-line text-sm text-gray-600"></i>
                            </div>
                            <TextInput
                                id="search"
                                type="search"
                                name="q"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="pl-10"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <PrimaryButton type="submit" className="mt-1">
                        Search
                    </PrimaryButton>
                </div>
            </form>
        </div>
    )
}
