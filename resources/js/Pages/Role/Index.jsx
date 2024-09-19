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
import ActiveBadge from '@/Components/helpers/ActiveBadge.jsx'
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
            Status: <ActiveBadge value={'Active'} />,
            Actions: (
                <Actions
                    edit={
                        hasUpdatePermission ? (
                            <OffCanvasButton
                                onClick={() => {
                                    getRole(role.id)
                                }}
                                className={'dropdown-item'}
                                id="roleFormCanvas"
                            >
                                <i className="ri-pencil-line me-1 text-primary"></i> Edit
                            </OffCanvasButton>
                        ) : null
                    }
                    deleteAction={
                        hasDeletePermission ? (
                            <DeleteEntityForm
                                action={route('service.role.destroy', role.id)}
                                refresh={getRoles}
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

            <PageHeader
                title={'Business Roles List'}
                subtitle={'Find all of your business’s roles and there associated permissions.'}
                action={
                    hasCreatePermission && (
                        <OffCanvasButton
                            onClick={() => {
                                setRole(null)
                                setPageData(pageObject(null))
                            }}
                            id="roleFormCanvas"
                        >
                            <i className="ri-add-line me-2"></i>
                            Create Role
                        </OffCanvasButton>
                    )
                }
            ></PageHeader>

            {hasCreatePermission && (
                <OffCanvas id="roleFormCanvas" title={pageData.title}>
                    <Form getRoles={getRoles} role={role} permissionsList={permissionsList} />
                </OffCanvas>
            )}

            <div className="col-12">
                <Table columns={columns} data={data} loading={loading} permission={hasListPermission} />
            </div>
        </Master>
    )
}
