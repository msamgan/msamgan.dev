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
                                }}
                                className={'dropdown-item'}
                                id="clientFormCanvas"
                            >
                                <i className="ri-pencil-line me-1 text-primary"></i> Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={services.client.destroy(client.id)}
                                refresh={getClients}
                                className={'dropdown-item'}
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
                title={'Business Client List'}
                subtitle={'Find all of your business’s clients and there associated details.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setClient(null)
                                setPageData(pageObject(null))
                            }}
                            id="clientFormCanvas"
                        >
                            <i className="ri-add-line me-2"></i>
                            Create Client
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas id="clientFormCanvas" title={pageData.title}>
                    <Form
                        getClients={getClients}
                        client={client}
                        organizations={organizations}
                        getOrganizations={getOrganizations}
                    />
                </OffCanvas>
            )}

            <div className="col-12">
                <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
            </div>
        </Master>
    )
}
