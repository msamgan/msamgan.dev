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
                                className={'flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary focus:outline-none focus:bg-gray-50 focus:text-primary transition-colors duration-200'}
                                id="organizationFormCanvas"
                            >
                                <svg className="h-4 w-4 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                                action={route('service.organization.destroy', organization.id)}
                                refresh={getOrganizations}
                                className={'flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:bg-red-50 focus:text-red-700 transition-colors duration-200'}
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
                    subtitle={'Find all of your business\'s organizations and there associated details.'}
                    action={
                        hasCreatePermission && (
                            <OffCanvasButton
                                onClick={() => {
                                    setOrganization(null)
                                    setPageData(pageObject(null))
                                    setIsOffCanvasOpen(true)
                                }}
                                id="organizationFormCanvas"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                            >
                                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
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
                    childrenClass={'mx-auto w-full md:w-2/3'}
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
                <div className="mt-8 bg-white overflow-hidden shadow-sm rounded-lg">
                    <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
                </div>
            </div>
        </Master>
    )
}
