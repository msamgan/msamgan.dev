import { useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import { dataObject } from '@/Pages/Role/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import FormLayout from '@/Components/layout/FormLayout.jsx'

export default function Form({ getRoles, role = null, permissionsList }) {
    const [action, setAction] = useState(routes.role.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(role))

    useEffect(() => {
        setAction(role ? routes.role.update(role.id) : routes.role.store)
        setData(dataObject(role))
    }, [role])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!role) {
                    reset('name', 'permissions')
                }

                getRoles()
            },
            onError: () => {},
        })
    }

    return (
        <FormLayout submit={submit} processing={processing} recentlySuccessful={recentlySuccessful}>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        id="role-name"
                        placeholder="Role name"
                        required={true}
                        isFocused={true}
                    />
                    <InputLabel htmlFor="role-name" required={true}>
                        Role name
                    </InputLabel>
                    <InputError className="mt-2" message={errors.name} />
                </div>
            </div>

            <div className="mb-6 w-2/3">
                <div className="card-body">
                    <div className="row g-5">
                        <div className="col-12 col-md-12">
                            <div className="form-floating form-floating-outline">
                                <div className="col-md">
                                    {Object.keys(permissionsList).map((key, index) => (
                                        <div key={index} className={'mt-6'}>
                                            <h6 className="fw-medium text-dark mb-3 text-lg">
                                                {key.toUpperCase() + ' MODULE'}
                                            </h6>
                                            <div className={'flex flex-row justify-start space-x-3'}>
                                                {permissionsList[key].map((permission, index) => (
                                                    <div className="pb-2" key={index}>
                                                        <label className="switch switch-square">
                                                            <input
                                                                id={`permission-${permission.id}`}
                                                                type="checkbox"
                                                                className="switch-input"
                                                                checked={data.permissions.includes(permission.id)}
                                                                onChange={(e) => {
                                                                    if (e.target.checked) {
                                                                        setData('permissions', [
                                                                            ...data.permissions,
                                                                            permission.id,
                                                                        ])
                                                                    } else {
                                                                        setData(
                                                                            'permissions',
                                                                            data.permissions.filter(
                                                                                (p) => p !== permission.id,
                                                                            ),
                                                                        )
                                                                    }
                                                                }}
                                                            />
                                                            <span className="switch-toggle-slider">
                                                                <span className="switch-on"></span>
                                                                <span className="switch-off"></span>
                                                            </span>
                                                            <span className="switch-label">{permission.name}</span>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormLayout>
    )
}
