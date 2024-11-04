import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { formatCurrency, formatDate, hasPermission, makeGetCall, ucfisrt } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Name from '@/Components/helpers/Name.jsx'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/Transaction/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/Transaction/Partials/Form.jsx'
import { services } from '@/Utils/services/index.js'
import Badge from '@/Components/helpers/Badge.jsx'
import Filters from '@/Pages/Transaction/Partials/Filters.jsx'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.transaction.list)
    let hasProjectListPermission = hasPermission(auth.user, permissions.project.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.transaction.create)

    const [transactions, setTransactions] = useState([])
    const [data, setData] = useState([])
    const [transaction, setTransaction] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))
    const [projects, setProjects] = useState([])
    const [descriptions, setDescriptions] = useState([])
    const [params, setParams] = useState({})

    const getTransactions = (filters = {}) => {
        makeGetCall(services.transaction.list(filters), setTransactions, setLoading)
    }

    const getProjects = () => {
        makeGetCall(services.project.list, setProjects, setLoading)
    }

    const getDescriptions = () => {
        makeGetCall(services.transaction.descriptions, setDescriptions, setLoading)
    }

    const processTransaction = (transaction) => {
        return {
            Description: <Name value={transaction.description} />,
            Project: transaction.project ? transaction.project.name : '',
            Type: (
                <Badge
                    value={ucfisrt(transaction.type)}
                    type={transaction.type === 'outgoing' ? 'cancelled' : 'completed'}
                />
            ),
            Amount: formatCurrency(transaction.amount),
            Date: formatDate(transaction.date),
        }
    }

    useEffect(() => {
        // get the search query from the URL
        const params = new URLSearchParams(window.location.search)
        setParams(params)

        if (hasListPermission) {
            getTransactions({
                q: params.get('q'),
                type: params.get('type'),
                'start-date': params.get('start-date'),
                'end-date': params.get('end-date'),
            })
            getDescriptions()
        }

        if (hasProjectListPermission) {
            getProjects()
        }
    }, [])

    useEffect(() => {
        setData(transactions.map((transaction) => processTransaction(transaction)))
    }, [transactions])

    return (
        <Master user={auth.user} header={'Transactions'}>
            <Head title="Transactions" />

            <PageHeader
                title={'Transaction List'}
                subtitle={'Find all of your business’s transactions and there associated details.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setTransaction(null)
                                setPageData(pageObject(null))
                            }}
                            id="transactionFormCanvas"
                        >
                            <i className="ri-add-line me-2"></i>
                            Create Transaction
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas id="transactionFormCanvas" title={pageData.title}>
                    <Form
                        getTransactions={getTransactions}
                        transaction={transaction}
                        projects={projects}
                        getProjects={getProjects}
                        descriptions={descriptions}
                    />
                </OffCanvas>
            )}

            <div className="col-12">
                <Table
                    columns={columns}
                    data={data}
                    loading={loading}
                    permission={hasListPermission}
                    filters={<Filters params={params} />}
                />
            </div>
        </Master>
    )
}
