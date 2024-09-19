import { role } from '@/Utils/services/role.js'
import { user } from '@/Utils/services/user.js'
import { organization } from '@/Utils/services/organization.js';

export const services = {
    menu: route('service.menu'),
    permissions: route('service.permissions'),
    role,
    user,
    organization,
}
