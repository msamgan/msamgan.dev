import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { formatCurrency, formatDate, hasPermission, makeGetCall, ucfisrt } from '@/Utils/methods.js'
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
    let hasCreatePermission = hasPermission(auth.user, permissions.project.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.project.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.project.delete)

    const [projects, setProjects] = useState([])
    const [data, setData] = useState([])
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))
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
                                }}
                                className={'dropdown-item'}
                                id="projectFormCanvas"
                            >
                                <i className="ri-pencil-line me-1 text-primary"></i> Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={route('service.project.destroy', project.id)}
                                refresh={getProjects}
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
            getProjects()
            getClients()
        }
    }, [])

    useEffect(() => {
        setData(projects.map((project) => processProject(project)))
    }, [projects])

    return (
        <Master user={auth.user} header={'Projects'}>
            <Head title="Projects" />

            <PageHeader
                title={'Business Project List'}
                subtitle={'Find all of your business’s projects and there associated details.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setProject(null)
                                setPageData(pageObject(null))
                            }}
                            id="projectFormCanvas"
                        >
                            <i className="ri-add-line me-2"></i>
                            Create Project
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas id="projectFormCanvas" title={pageData.title}>
                    <Form getProjects={getProjects} project={project} clients={clients} getClients={getClients} />
                </OffCanvas>
            )}

            <div className="col-12">
                <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
            </div>
        </Master>
    )
}
