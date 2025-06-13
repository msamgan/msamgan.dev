import { useState } from 'react'
import PrimaryButton from '@/Components/PrimaryButton.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import TextInput from '@/Components/TextInput.jsx'

export default function Filters({ params }) {
    const [search, setSearch] = useState(params.get('q'))
    const [status, setStatus] = useState(params.get('status'))
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
                        <InputLabel htmlFor="col-status" required={false} className="mb-1">
                            Status
                        </InputLabel>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            id="col-status"
                            className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-0"
                            name="status"
                        >
                            <option value="">All Statuses</option>
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
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
