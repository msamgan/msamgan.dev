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
import { services } from '@/Utils/services/index.js'

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
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)

    const getOrganizations = () => {
        makeGetCall(services.organization.list, setOrganizations, setLoading)
    }

    const getOrganization = (id) => {
        makeGetCall(services.organization.show(id), setOrganization, setLoading)
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
                                    setIsOffCanvasOpen(true)
                                }}
                                className={
                                    'hover:bg-gray-50 focus:bg-gray-50 ml-4 flex w-full items-center px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-primary focus:text-primary focus:outline-none'
                                }
                                id="organizationFormCanvas"
                            >
                                <i className="ri-edit-line mr-2 text-sm text-primary"></i>
                                Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={route('service.organization.destroy', organization.id)}
                                refresh={getOrganizations}
                                className={
                                    'hover:bg-red-50 focus:bg-red-50 flex w-full items-center px-4 py-2 text-sm text-red-600 transition-colors duration-200 hover:text-red-700 focus:text-red-700 focus:outline-none'
                                }
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

            <div className="container mx-auto px-4 pt-6">
                <PageHeader
                    title={'Organization List'}
                    subtitle={"Find all of your business's organizations and there associated details."}
                    action={
                        hasCreatePermission && (
                            <OffCanvasButton
                                onClick={() => {
                                    setOrganization(null)
                                    setPageData(pageObject(null))
                                    setIsOffCanvasOpen(true)
                                }}
                                id="organizationFormCanvas"
                                className="border-transparent inline-flex items-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <i className="ri-add-line mr-2 text-sm"></i>
                                Create Organization
                            </OffCanvasButton>
                        )
                    }
                ></PageHeader>
            </div>

            {hasCreatePermission && (
                <OffCanvas
                    id="organizationFormCanvas"
                    title={pageData.title}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form
                        getOrganizations={getOrganizations}
                        organization={organization}
                        onSuccess={() => setIsOffCanvasOpen(false)}
                    />
                </OffCanvas>
            )}

            <div className="container mx-auto px-4 py-6">
                <div className="mt-8 overflow-hidden rounded-lg bg-white shadow-sm">
                    <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
                </div>
            </div>
        </Master>
    )
}
