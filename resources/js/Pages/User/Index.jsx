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
                                className={'flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'}
                                id="userFormCanvas"
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
                                action={route('service.user.destroy', user.id)}
                                refresh={getUsers}
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

            <PageHeader
                title={'User List'}
                subtitle={'Find all of your business’s users and there associated details.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setUser(null)
                                setPageData(pageObject(null))
                                setIsOffCanvasOpen(true)
                            }}
                            id="userFormCanvas"
                        >
                            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Create User
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas
                    id="userFormCanvas"
                    title={pageData.title}
                    w={'w-full md:w-2/3 lg:w-1/2'}
                    childrenClass={'mx-auto w-full md:w-2/3'}
                    isOpen={isOffCanvasOpen}
                    onClose={() => setIsOffCanvasOpen(false)}
                >
                    <Form
                        getUsers={getUsers}
                        roles={roles}
                        user={user}
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
