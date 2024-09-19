import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { hasPermission, makeGetCall } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/Organization/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/Organization/Partials/Form.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.organization.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.organization.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.organization.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.organization.delete)

    const [organizations, setOrganizations] = useState([])
    const [data, setData] = useState([])
    const [organization, setOrganization] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))

    const getOrganizations = () => {
        makeGetCall(route('service.organizations'), setOrganizations, setLoading)
    }

    const getOrganization = (id) => {
        makeGetCall(route('service.organization.show', id), setOrganization, setLoading)
    }

    const processOrganization = (organization) => {
        return {
            Name: <Name value={organization.name} />,
            Location: organization.location,
            Actions: (
                <Actions
                    edit={
                        hasUpdatePermission ? (
                            <OffCanvasButton
                                onClick={() => {
                                    getOrganization(organization.id)
                                    setPageData(pageObject(organization))
                                }}
                                className={'dropdown-item'}
                                id="organizationFormCanvas"
                            >
                                <i className="ri-pencil-line me-1 text-primary"></i> Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={route('service.organization.destroy', organization.id)}
                                refresh={getOrganizations}
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
            getOrganizations()
        }
    }, [])

    useEffect(() => {
        setData(organizations.map((organization) => processOrganization(organization)))
    }, [organizations])

    return (
        <Master user={auth.user} header={'Organizations'}>
            <Head title="Organizations" />

            <PageHeader
                title={'Business Organization List'}
                subtitle={'Find all of your business’s organizations and there associated details.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setOrganization(null)
                                setPageData(pageObject(null))
                            }}
                            id="organizationFormCanvas"
                        >
                            <i className="ri-add-line me-2"></i>
                            Create Organization
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas id="organizationFormCanvas" title={pageData.title}>
                    <Form getOrganizations={getOrganizations} organization={organization} />
                </OffCanvas>
            )}

            <div className="col-12">
                <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
            </div>
        </Master>
    )
}
