import { role } from '@/Utils/services/role.js'
import { user } from '@/Utils/services/user.js'
import { organization } from '@/Utils/services/organization.js'
import { client } from '@/Utils/services/client.js'
import { project } from '@/Utils/services/project.js'
import { post } from '@/Utils/services/post.js'
import { transaction } from '@/Utils/services/transaction.js'
import { media } from '@/Utils/services/media.js'

export const services = {
    menu: route('service.menu'),
    permissions: route('service.permissions'),
    role,
    user,
    organization,
    client,
    project,
    post,
    transaction,
    media,
}
