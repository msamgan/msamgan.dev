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
import ToggleFilterButton from '@/Components/ToggleFilterButton.jsx'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.transaction.list)
    let hasProjectListPermission = hasPermission(auth.user, permissions.project.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.transaction.create)

    const [transactions, setTransactions] = useState([])
    const [data, setData] = useState([])
    const [transaction, setTransaction] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
    const [projects, setProjects] = useState([])
    const [descriptions, setDescriptions] = useState([])
    const [params, setParams] = useState({})
    const [showFilters, setShowFilters] = useState(false)

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

        // if any params are present, set the show filters to true
        if (params.get('q') || params.get('type') || params.get('start-date') || params.get('end-date')) {
            setShowFilters(true)
        }

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

            <div className="container mx-auto px-4 pt-6">
                <PageHeader
                    title={'Transaction List'}
                    subtitle={'Find all of your business\'s transactions and there associated details.'}
                    action={
                        hasCreatePermission && (
                            <div className={'flex gap-2'}>
                                <OffCanvasButton
                                    onClick={() => {
                                        setTransaction(null)
                                        setPageData(pageObject(null))
                                        setIsOffCanvasOpen(true)
                                    }}
                                    id="transactionFormCanvas"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                                >
                                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                    Create Transaction
                                </OffCanvasButton>
                                <ToggleFilterButton showFilters={showFilters} setShowFilters={setShowFilters} />
                            </div>
                        )
                    }
                ></PageHeader>
            </div>

            {hasCreatePermission && (
                <OffCanvas
                    id="transactionFormCanvas"
                    title={pageData.title}
                    childrenClass={'mx-auto w-full md:w-2/3'}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form
                        getTransactions={getTransactions}
                        transaction={transaction}
                        projects={projects}
                        getProjects={getProjects}
                        descriptions={descriptions}
                        onSuccess={() => setIsOffCanvasOpen(false)}
                    />
                </OffCanvas>
            )}

            <div className="container mx-auto px-4 py-6">
                <div className="mt-8 bg-white overflow-hidden shadow-sm rounded-lg">
                    <Table
                        columns={columns}
                        data={data}
                        loading={loading}
                        permission={hasListPermission}
                        filters={showFilters ? <Filters params={params} /> : null}
                    />
                </div>
            </div>
        </Master>
    )
}
