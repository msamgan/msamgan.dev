import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { hasPermission, makeGetCall } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/Client/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/Client/Partials/Form.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'
import { services } from '@/Utils/services/index.js'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.client.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.client.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.client.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.client.delete)

    const [clients, setClients] = useState([])
    const [data, setData] = useState([])
    const [client, setClient] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)

    const [organizations, setOrganizations] = useState([])

    const getClients = () => {
        makeGetCall(services.client.list, setClients, setLoading)
    }

    const getOrganizations = () => {
        makeGetCall(services.organization.list, setOrganizations, setLoading)
    }

    const getClient = (id) => {
        makeGetCall(services.client.show(id), setClient, setLoading)
    }

    const processClient = (client) => {
        return {
            Name: <Name value={client.name} />,
            Location: client.organization?.name,
            // array of emails to coma separated string
            Email: client.emails.map((email) => email.email).join(', '),
            Phone: client.phones.map((phone) => phone.phone).join(', '),
            Actions: (
                <Actions
                    edit={
                        hasUpdatePermission ? (
                            <OffCanvasButton
                                onClick={() => {
                                    getClient(client.id)
                                    setPageData(pageObject(client))
                                    setIsOffCanvasOpen(true)
                                }}
                                className={'flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'}
                                id="clientFormCanvas"
                            >
                                <svg className="h-4 w-4 mr-2 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                                Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={services.client.destroy(client.id)}
                                refresh={getClients}
                                className={'flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'}
                            />
                        ) : null
                    }
                />
            ),
        }
    }

    useEffect(() => {
        if (hasListPermission) {
            getClients()
            getOrganizations()
        }
    }, [])

    useEffect(() => {
        setData(clients.map((client) => processClient(client)))
    }, [clients])

    return (
        <Master user={auth.user} header={'Clients'}>
            <Head title="Clients" />

            <PageHeader
                title={'Client List'}
                subtitle={'Find all of your business’s clients and there associated details.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setClient(null)
                                setPageData(pageObject(null))
                                setIsOffCanvasOpen(true)
                            }}
                            id="clientFormCanvas"
                        >
                            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Create Client
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas
                    id="clientFormCanvas"
                    title={pageData.title}
                    w={'w-full md:w-2/3 lg:w-1/2'}
                    childrenClass={'mx-auto w-full md:w-2/3'}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form
                        getClients={getClients}
                        client={client}
                        organizations={organizations}
                        getOrganizations={getOrganizations}
                        onSuccess={() => setIsOffCanvasOpen(false)}
                    />
                </OffCanvas>
            )}

            <div className="w-full">
                <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
            </div>
        </Master>
    )
}
