import Loading from '@/Components/Loading.jsx'
import DisplayMessage from '@/Components/DisplayMessage.jsx'

const TableContainer = ({ columns, data, tdClassName }) => {
    return (
        <div className="mt-4">
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-800">Data Table</h3>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-600">Total Records:</span>
                        <span className="ml-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                            {data.length}
                        </span>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column, index) => {
                                const isActionColumn = column === 'Actions'
                                return (
                                    <th
                                        key={index}
                                        className={`px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-600 ${isActionColumn ? 'text-right' : 'text-left'}`}
                                        scope="col"
                                    >
                                        {column}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} transition-colors duration-150 hover:bg-gray-100`}
                            >
                                {Object.values(row).map((cell, cellIndex) => {
                                    const isActionColumn = columns[cellIndex] === 'Actions'
                                    return (
                                        <td
                                            key={cellIndex}
                                            className={`whitespace-nowrap px-6 py-4 text-sm ${
                                                isActionColumn
                                                    ? 'w-24 text-right'
                                                    : tdClassName.filter(
                                                          (item) => item.column === columns[cellIndex],
                                                      )[0]?.className || 'text-gray-700'
                                            }`}
                                        >
                                            {cell}
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default function Table({ columns, data, tdClassName = [], loading, permission, filters = null }) {
    return permission ? (
        loading ? (
            <Loading />
        ) : data.length > 0 ? (
            <>
                {filters && <div className="mb-8">{filters}</div>}
                <TableContainer columns={columns} data={data} tdClassName={tdClassName} />
            </>
        ) : (
            <>
                {filters && <div className="mb-8">{filters}</div>}
                <DisplayMessage text={'No data available.'} />
            </>
        )
    ) : (
        <DisplayMessage text={'You do not have permission to view this content...'} />
    )
}
