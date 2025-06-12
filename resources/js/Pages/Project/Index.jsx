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
                                    'hover:bg-gray-50 focus:bg-gray-50 flex w-full items-center px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-primary focus:text-primary focus:outline-none'
                                }
                                id="projectFormCanvas"
                            >
                                <svg
                                    className="mr-2 h-4 w-4 text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
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
                                <svg
                                    className="mr-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
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
                    childrenClass={'mx-auto w-full md:w-2/3'}
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
