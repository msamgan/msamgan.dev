import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { formatCurrency, formatDate, hasPermission, makeGetCall } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import Badge from '@/Components/helpers/Badge.jsx'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/Project/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/Project/Partials/Form.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'
import { services } from '@/Utils/services/index.js'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.project.list)
    let hasClientListPermission = hasPermission(auth.user, permissions.client.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.project.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.project.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.project.delete)

    const [projects, setProjects] = useState([])
    const [data, setData] = useState([])
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
    const [clients, setClients] = useState([])

    const getProjects = () => {
        makeGetCall(services.project.list, setProjects, setLoading)
    }

    const getProject = (id) => {
        makeGetCall(services.project.show(id), setProject, setLoading)
    }

    const getClients = () => {
        makeGetCall(services.client.list, setClients, setLoading)
    }

    const processProject = (project) => {
        return {
            Name: <Name value={project.name} />,
            Client: project?.client?.name,
            status: <Badge value={project.status} type={project.status} />,
            Dates: formatDate(project.start_date) + ' - ' + formatDate(project.end_date),
            Costing: formatCurrency(project.costing),
            Type: <Badge value={project.type} type={project.type === 'singular' ? 'lead' : 'active'} />,
            Actions: (
                <Actions
                    edit={
                        hasUpdatePermission ? (
                            <OffCanvasButton
                                onClick={() => {
                                    getProject(project.id)
                                    setPageData(pageObject(project))
                                    setIsOffCanvasOpen(true)
                                }}
                                className={
                                    'hover:bg-gray-50 focus:bg-gray-50 ml-4 flex w-full items-center px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-primary focus:text-primary focus:outline-none'
                                }
                                id="projectFormCanvas"
                            >
                                <i className="ri-edit-line mr-2 text-sm text-primary"></i>
                                Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={route('service.project.destroy', project.id)}
                                refresh={getProjects}
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
            getProjects()
        }

        if (hasClientListPermission) {
            getClients()
        }
    }, [])

    useEffect(() => {
        setData(projects.map((project) => processProject(project)))
    }, [projects])

    return (
        <Master user={auth.user} header={'Projects'}>
            <Head title="Projects" />

            <div className="container mx-auto px-4 pt-6">
                <PageHeader
                    title={'Project List'}
                    subtitle={"Find all of your business's projects and there associated details."}
                    action={
                        hasCreatePermission && (
                            <OffCanvasButton
                                onClick={() => {
                                    setProject(null)
                                    setPageData(pageObject(null))
                                    setIsOffCanvasOpen(true)
                                }}
                                id="projectFormCanvas"
                                className="border-transparent inline-flex items-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <i className="ri-add-line mr-2 text-sm"></i>
                                Create Project
                            </OffCanvasButton>
                        )
                    }
                ></PageHeader>
            </div>

            {hasCreatePermission && (
                <OffCanvas
                    id="projectFormCanvas"
                    title={pageData.title}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form
                        getProjects={getProjects}
                        project={project}
                        clients={clients}
                        getClients={getClients}
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
