import { role } from '@/Utils/routes/role.js'
import { user } from '@/Utils/routes/user.js'

export const routes = {
    business: {
        update: (id) => route('business.update', id),
    },
    notifications: {
        index: route('notification.index'),
    },
    role,
    user,
}
