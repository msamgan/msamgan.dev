import { role } from '@/Utils/services/role.js'
import { user } from '@/Utils/services/user.js'
import { organization } from '@/Utils/services/organization.js'
import { client } from '@/Utils/services/client.js'

export const services = {
    menu: route('service.menu'),
    permissions: route('service.permissions'),
    role,
    user,
    organization,
    client,
}
