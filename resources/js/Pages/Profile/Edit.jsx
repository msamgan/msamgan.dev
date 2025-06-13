import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import { Head } from '@inertiajs/react'
import Master from '@/Layouts/Master.jsx'
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.jsx'

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <Master user={auth.user} header={'Profile'}>
            <Head title="Profile" />

            <div className="mx-auto space-y-6">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-full"
                    />
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <UpdatePasswordForm className="max-w-full" />
                </div>

                {/*<div className="overflow-hidden rounded-lg bg-white shadow">
					<DeleteUserForm className="max-w-full" />
				</div>*/}
            </div>
        </Master>
    )
}
