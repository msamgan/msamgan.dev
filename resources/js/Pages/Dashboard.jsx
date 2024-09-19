import { Head } from '@inertiajs/react'
import Master from '@/Layouts/Master.jsx'

export default function Dashboard({ auth }) {
    return (
        <Master user={auth.user} header={'Dashboard'}>
            <Head title="Dashboard" />

            <div className="col-12">
                You're logged in as {auth.user.name} ({auth.user.email}).
            </div>
        </Master>
    )
}
