import Loading from '@/Components/Loading.jsx'
import DisplayMessage from '@/Components/DisplayMessage.jsx'

const TableContainer = ({ columns, data, tdClassName }) => {
    return (
        <div className="mt">
            <div className="table-responsive text-nowrap">
                <h5 className="card-header text-end text-lg font-light">
                    Total Records:
                    <span className="badge rounded-pill ms-4 bg-primary">{data.length}</span>
                </h5>
                <table className="table-sm table-hover mt-8 table">
                    <thead className={'table-dark'}>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((cell, index) => (
                                    <td
                                        key={index}
                                        className={
                                            tdClassName.filter((item) => item.column === columns[index])[0]?.className
                                        }
                                    >
                                        {cell}
                                    </td>
                                ))}
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
                <div className={'mb-8'}>{filters}</div>
                <TableContainer columns={columns} data={data} tdClassName={tdClassName} filters={filters} />
            </>
        ) : (
            <>
                <div className={'mb-8'}>{filters}</div>
                <DisplayMessage text={'No data available.'} />
            </>
        )
    ) : (
        <DisplayMessage text={'You do not have permission to view this content...'} />
    )
}
