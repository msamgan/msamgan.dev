import Loading from '@/Components/Loading.jsx'
import DisplayMessage from '@/Components/DisplayMessage.jsx'

const TableContainer = ({ columns, data, tdClassName }) => {
    return (
        <div className="mt-4">
            <div className="overflow-x-auto">
                <div className="flex justify-end items-center p-4 bg-gray-100 rounded-t-lg">
                    <div className="text-lg font-light">
                        Total Records:
                        <span className="ml-4 px-3 py-1 text-white bg-primary rounded-full text-sm">{data.length}</span>
                    </div>
                </div>
                <table className="min-w-full mt-2 border-collapse">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            {columns.map((column, index) => {
                                const isActionColumn = column === 'Actions';
                                return (
                                    <th
                                        key={index}
                                        className={`px-4 py-3 text-sm font-medium ${isActionColumn ? 'text-right' : 'text-left'}`}
                                        scope="col"
                                    >
                                        {column}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                {Object.values(row).map((cell, index) => {
                                    const isActionColumn = columns[index] === 'Actions';
                                    return (
                                        <td
                                            key={index}
                                            className={`px-4 py-3 text-sm ${
                                                isActionColumn
                                                    ? 'text-right whitespace-nowrap w-24'
                                                    : tdClassName.filter((item) => item.column === columns[index])[0]?.className || ''
                                            }`}
                                        >
                                            {cell}
                                        </td>
                                    );
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
