import Loading from '@/Components/Loading.jsx'
import DisplayMessage from '@/Components/DisplayMessage.jsx'

const TableContainer = ({ columns, data, tdClassName }) => {
    return (
        <div className="card mt">
            <div className="table-responsive text-nowrap">
                <h5 className="card-header text-end text-lg font-light">
                    Total Records:
                    <span className="badge rounded-pill ms-4 bg-primary">{data.length}</span>
                </h5>
                <table className="table-sm table">
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

export default function Table({ columns, data, tdClassName = [], loading, permission }) {
    return permission ? (
        loading ? (
            <Loading />
        ) : data.length > 0 ? (
            <TableContainer columns={columns} data={data} tdClassName={tdClassName} />
        ) : (
            <DisplayMessage text={'No data available.'} />
        )
    ) : (
        <DisplayMessage text={'You do not have permission to view this content...'} />
    )
}
