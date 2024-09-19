import { role } from '@/Utils/services/role.js'
import { user } from '@/Utils/services/user.js'

export const services = {
    menu: route('service.menu'),
    permissions: route('service.permissions'),
    role,
    user,
}
