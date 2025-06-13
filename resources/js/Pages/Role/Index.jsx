import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import PageHeader from '@/Components/PageHeader.jsx'
import { hasPermission, makeGetCall } from '@/Utils/methods.js'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/Role/helper.js'
import Form from '@/Pages/Role/Partials/Form.jsx'
import { useEffect, useState } from 'react'
import Name from '@/Components/helpers/Name.jsx'
import Badge from '@/Components/helpers/Badge.jsx'
import Actions from '@/Components/helpers/Actions.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'
import { services } from '@/Utils/services/index.js'
import { permissions } from '@/Utils/permissions/index.js'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.role.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.role.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.role.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.role.delete)

    const [roles, setRoles] = useState([])
    const [data, setData] = useState([])
    const [role, setRole] = useState(null)
    const [pageData, setPageData] = useState(pageObject(null))
    const [loading, setLoading] = useState(true)
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
    const [permissionsList, setPermissionsList] = useState([])

    const getPermissions = () => {
        makeGetCall(services.permissions, setPermissionsList, setLoading)
    }

    const getRoles = () => {
        makeGetCall(services.role.list, setRoles, setLoading)
    }

    const getRole = (id) => {
        makeGetCall(services.role.show(id), setRole, setLoading)
    }

    const processRole = (role) => {
        return {
            Name: <Name value={role.display_name} />,
            UserCount: role.users_count,
            Status: <Badge value={'Active'} />,
            Actions: (
                <Actions
                    edit={
                        hasUpdatePermission ? (
                            <OffCanvasButton
                                onClick={() => {
                                    getRole(role.id)
                                    setIsOffCanvasOpen(true)
                                }}
                                className={
                                    'hover:bg-gray-50 focus:bg-gray-50 flex w-full items-center px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-primary focus:text-primary focus:outline-none'
                                }
                                id="roleFormCanvas"
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
                                action={route('service.role.destroy', role.id)}
                                refresh={getRoles}
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
            getRoles()
        }

        getPermissions()
    }, [])

    useEffect(() => {
        setData(roles.map((role) => processRole(role)))
    }, [roles])

    useEffect(() => {
        setPageData(pageObject(role))
    }, [role])

    return (
        <Master user={auth.user}>
            <Head title="Roles" />

            <div className="container mx-auto px-4 pt-6">
                <PageHeader
                    title={'Roles List'}
                    subtitle={"Find all of your business's roles and there associated permissions."}
                    action={
                        hasCreatePermission && (
                            <OffCanvasButton
                                onClick={() => {
                                    setRole(null)
                                    setPageData(pageObject(null))
                                    setIsOffCanvasOpen(true)
                                }}
                                id="roleFormCanvas"
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
                                Create Role
                            </OffCanvasButton>
                        )
                    }
                ></PageHeader>
            </div>

            {hasCreatePermission && (
                <OffCanvas
                    id="roleFormCanvas"
                    title={pageData.title}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form
                        getRoles={getRoles}
                        role={role}
                        permissionsList={permissionsList}
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
