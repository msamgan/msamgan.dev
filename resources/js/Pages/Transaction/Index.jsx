import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { hasPermission, makeGetCall } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/Transaction/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/Transaction/Partials/Form.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'
import { services } from '@/Utils/services/index.js'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.transaction.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.transaction.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.transaction.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.transaction.delete)

    const [transactions, setTransactions] = useState([])
    const [data, setData] = useState([])
    const [transaction, setTransaction] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))

    const getTransactions = () => {
        makeGetCall(services.transaction.list, setTransactions, setLoading)
    }

    const getTransaction = (id) => {
        makeGetCall(services.transaction.show(id), setTransaction, setLoading)
    }

    const processTransaction = (transaction) => {
        return {
            Description: <Name value={transaction.description} />,
            Type: transaction.type,
            Amount: transaction.amount,
            Date: transaction.date
        }
    }

    useEffect(() => {
        if (hasListPermission) {
            getTransactions()
        }
    }, [])

    useEffect(() => {
        setData(transactions.map((transaction) => processTransaction(transaction)))
    }, [transactions])

    return (
        <Master user={auth.user} header={'Transactions'}>
            <Head title="Transactions" />

            <PageHeader
                title={'Business Transaction List'}
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
                    <Form getTransactions={getTransactions} transaction={transaction} />
                </OffCanvas>
            )}

            <div className="col-12">
                <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
            </div>
        </Master>
    )
}
