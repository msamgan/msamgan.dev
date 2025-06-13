import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import Form from '@/Pages/Post/Partials/Form.jsx'
import PageHeader from '@/Components/PageHeader.jsx'

export default function Create({ auth }) {
    return (
        <Master user={auth.user} header={'Create Post'}>
            <Head title="Create Post" />

            <div className="container mx-auto px-4 pt-6">
                <PageHeader title={'Create New Post'} subtitle={'Create a new post for your business.'} />
            </div>

            <div className="container mx-auto">
                <Form postData={null} />
            </div>
        </Master>
    )
}
