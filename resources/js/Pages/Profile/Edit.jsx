import UpdatePasswordForm from './Partials/UpdatePasswordForm'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm'
import { Head } from '@inertiajs/react'
import Master from '@/Layouts/Master.jsx'
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.jsx'

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <Master user={auth.user} header={'Profile'}>
            <Head title="Profile" />

            <div className="mx-auto space-y-10">
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                {/*<div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
					<DeleteUserForm className="max-w-xl" />
				</div>*/}
            </div>
        </Master>
    )
}
