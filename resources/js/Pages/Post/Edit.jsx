import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import Form from '@/Pages/Post/Partials/Form.jsx'
import PageHeader from '@/Components/PageHeader.jsx'

export default function Edit({ auth, post }) {
    return (
        <Master user={auth.user} header={'Edit Post'}>
            <Head title="Edit Post" />

            <div className="container mx-auto px-4 pt-6">
                <PageHeader title={'Edit Post'} subtitle={'Edit your existing post.'} />
            </div>

            <div className="container mx-auto px-4 py-6">{post && <Form postData={post} />}</div>
        </Master>
    )
}
