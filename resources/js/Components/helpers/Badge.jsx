import { ucfisrt } from '@/Utils/methods.js'

export default function Badge({ value, type = 'active' }) {
    let typeObject = {
        active: 'bg-label-primary',
        lead: 'bg-label-secondary',
        completed: 'bg-label-success',
        cancelled: 'bg-label-danger',
    }

    return <span className={`badge ${typeObject[type]} rounded-pill`}>{ucfisrt(value)}</span>
}
