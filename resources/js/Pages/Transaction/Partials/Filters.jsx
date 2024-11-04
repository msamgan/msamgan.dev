import { useState } from 'react'
import PrimaryButton from '@/Components/PrimaryButton.jsx'
import InputLabel from '@/Components/InputLabel.jsx'

export default function Filters({ params }) {
    const [search, setSearch] = useState(params.get('q'))
    const [type, setType] = useState(params.get('type'))
    const [startDate, setStartDate] = useState(params.get('start-date'))
    const [endDate, setEndDate] = useState(params.get('end-date'))

    return (
        <div>
            <form className={'flex flex-row justify-end gap-3'}>
                <div className="col-2 col-md-2">
                    <div className="form-floating form-floating-outline">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            id="col-start-date"
                            placeholder="Start Date"
                            className="h-10 w-full rounded-md p-2"
                            name={'start-date'}
                        />
                    </div>
                    <InputLabel htmlFor="col-start-date" className={'mt-1'} required={false}>
                        Start Date
                    </InputLabel>
                </div>
                <div className="col-2 col-md-2">
                    <div className="form-floating form-floating-outline">
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            id="col-end-date"
                            placeholder="End Date"
                            className="h-10 w-full rounded-md p-2"
                            name={'end-date'}
                        />
                    </div>
                    <InputLabel htmlFor="col-end-date" className={'mt-1'} required={false}>
                        End Date
                    </InputLabel>
                </div>
                <div className="col-2 col-md-2">
                    <div className="form-floating form-floating-outline">
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            id="col-type"
                            className="h-10 w-full rounded-md p-2"
                            name={'type'}
                        >
                            <option value="">Select Type</option>
                            <option value="incoming">Incoming</option>
                            <option value="outgoing">Outgoing</option>
                        </select>
                    </div>
                </div>
                <fieldset className="text-gray-800">
                    <label htmlFor="Search" className="hidden">
                        Search
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="h-4 w-4 text-gray-800">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            type="search"
                            name="q"
                            placeholder="Search..."
                            className="focus:bg-gray-50 focus:border-sky-600 h-10 w-32 rounded-md bg-white py-2 pl-10 text-sm text-gray-800 focus:outline-none sm:w-auto"
                        />
                    </div>
                </fieldset>
                <PrimaryButton type="submit" className={'h-10'}>
                    search
                </PrimaryButton>
            </form>
        </div>
    )
}
