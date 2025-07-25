import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import { hasPermission, makeGetCall } from '@/Utils/methods.js'
import { permissions } from '@/Utils/permissions/index.js'
import { useEffect, useState } from 'react'
import Actions from '@/Components/helpers/Actions.jsx'
import Name from '@/Components/helpers/Name.jsx'
import Badge from '@/Components/helpers/Badge.jsx'
import OffCanvasButton from '@/Components/off_canvas/OffCanvasButton.jsx'
import Table from '@/Components/layout/Table.jsx'
import { columns, pageObject } from '@/Pages/User/helper.js'
import PageHeader from '@/Components/PageHeader.jsx'
import OffCanvas from '@/Components/off_canvas/OffCanvas.jsx'
import Form from '@/Pages/User/Partials/Form.jsx'
import DeleteEntityForm from '@/Components/layout/DeleteEntityForm.jsx'
import { services } from '@/Utils/services/index.js'

export default function Index({ auth }) {
    let hasListPermission = hasPermission(auth.user, permissions.user.list)
    let hasCreatePermission = hasPermission(auth.user, permissions.user.create)
    let hasUpdatePermission = hasPermission(auth.user, permissions.user.update)
    let hasDeletePermission = hasPermission(auth.user, permissions.user.delete)

    const [users, setUsers] = useState([])
    const [data, setData] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState(pageObject(null))
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
    const [roles, setRoles] = useState([])

    const getUsers = () => {
        makeGetCall(services.user.list, setUsers, setLoading)
    }

    const getRoles = () => {
        makeGetCall(services.role.list, setRoles, setLoading)
    }

    const getUser = (id) => {
        makeGetCall(services.user.show(id), setUser, setLoading)
    }

    const processUser = (user) => {
        return {
            Name: <Name value={user.name} />,
            Roles: user.roles.map((role) => role.display_name).join(', '),
            Status: <Badge value={'Active'} />,
            Actions: (
                <Actions
                    edit={
                        hasUpdatePermission ? (
                            <OffCanvasButton
                                onClick={() => {
                                    getUser(user.id)
                                    setPageData(pageObject(user))
                                    setIsOffCanvasOpen(true)
                                }}
                                className={
                                    'hover:bg-gray-50 focus:bg-gray-50 ml-4 flex w-full items-center px-4 py-2 text-sm text-gray-600 transition-colors duration-200 hover:text-primary focus:text-primary focus:outline-none'
                                }
                                id="userFormCanvas"
                            >
                                <i className="ri-edit-line mr-2 text-sm text-primary"></i>
                                Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={route('service.user.destroy', user.id)}
                                refresh={getUsers}
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
            getUsers()
        }

        getRoles()
    }, [])

    useEffect(() => {
        setData(users.map((user) => processUser(user)))
    }, [users])

    return (
        <Master user={auth.user} header={'Users'}>
            <Head title="Users" />

            <div className="container mx-auto px-4 pt-6">
                <PageHeader
                    title={'User List'}
                    subtitle={"Find all of your business's users and there associated details."}
                    action={
                        hasCreatePermission && (
                            <OffCanvasButton
                                onClick={() => {
                                    setUser(null)
                                    setPageData(pageObject(null))
                                    setIsOffCanvasOpen(true)
                                }}
                                id="userFormCanvas"
                                className="border-transparent inline-flex items-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <i className="ri-add-line mr-2 text-sm"></i>
                                Create User
                            </OffCanvasButton>
                        )
                    }
                ></PageHeader>
            </div>

            {hasCreatePermission && (
                <OffCanvas
                    id="userFormCanvas"
                    title={pageData.title}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form getUsers={getUsers} roles={roles} user={user} onSuccess={() => setIsOffCanvasOpen(false)} />
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
