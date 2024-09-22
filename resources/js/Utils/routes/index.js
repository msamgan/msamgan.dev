import { role } from '@/Utils/routes/role.js'
import { user } from '@/Utils/routes/user.js'
import { organization } from '@/Utils/routes/organization.js'
import { client } from '@/Utils/routes/client.js'

export const routes = {
    business: {
        update: (id) => route('business.update', id),
    },
    notifications: {
        index: route('notification.index'),
    },
    role,
    user,
    organization,
    client,
}
