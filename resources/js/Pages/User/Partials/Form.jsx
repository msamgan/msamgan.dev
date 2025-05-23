import { useForm } from '@inertiajs/react'
import TextInput from '@/Components/TextInput.jsx'
import InputLabel from '@/Components/InputLabel.jsx'
import InputError from '@/Components/InputError.jsx'
import { dataObject } from '@/Pages/User/helper.js'
import { useEffect, useState } from 'react'
import { routes } from '@/Utils/routes/index.js'
import FormLayout from '@/Components/layout/FormLayout.jsx'

export default function Form({ getUsers, user = null, roles }) {
    const [action, setAction] = useState(routes.user.store)
    const { data, setData, post, errors, processing, recentlySuccessful, reset } = useForm(dataObject(null))

    useEffect(() => {
        setAction(user ? routes.user.update(user.id) : routes.user.store)
        setData(dataObject(user))
    }, [user])

    const submit = (e) => {
        e.preventDefault()

        post(action, {
            onSuccess: (r) => {
                if (!user) {
                    reset('name', 'email', 'password', 'role')
                }

                getUsers()
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
                        id="user-name"
                        placeholder="Name"
                        required={true}
                        isFocused={true}
                    />
                    <InputLabel htmlFor="user-name" required={true}>
                        Name
                    </InputLabel>
                    <InputError className="mt-2" message={errors.name} />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="text"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        id="user-email"
                        placeholder="Email"
                        required={true}
                    />
                    <InputLabel htmlFor="user-email" required={true}>
                        Email
                    </InputLabel>
                    <InputError className="mt-2" message={errors.email} />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-floating form-floating-outline">
                    <TextInput
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        id="user-password"
                        placeholder="Password"
                        required={!user}
                    />
                    <InputLabel htmlFor="user-password" required={true}>
                        Password
                    </InputLabel>
                    <InputError className="mt-2" message={errors.password} />
                    {user && (
                        <small className="text-muted">
                            If you enter a password, the current password will be replaced.
                        </small>
                    )}
                </div>
            </div>
            <div className="col-12 col-md-12">
                <div className="form-floating form-floating-outline">
                    <select
                        id="role"
                        className="form-select rounded-md pb-2"
                        data-placeholder="Role"
                        value={data.role}
                        onChange={(e) => setData('role', e.target.value)}
                    >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.display_name}
                            </option>
                        ))}
                    </select>
                    <InputLabel htmlFor="role" required={true}>
                        Role
                    </InputLabel>
                    <InputError className="mt-2" message={errors.role} />
                </div>
            </div>
        </FormLayout>
    )
}
