import { business } from '@/Utils/permissions/business.js'
import { role } from '@/Utils/permissions/role.js'
import { user } from '@/Utils/permissions/user.js'
import { organization } from '@/Utils/permissions/organization.js'
import { client } from '@/Utils/permissions/client.js'
import { project } from '@/Utils/permissions/project.js'
import { post } from '@/Utils/permissions/post.js'
import { transaction } from '@/Utils/permissions/transaction.js'

export const permissions = {
    business,
    role,
    user,
    organization,
    client,
    project,
    post,
    transaction,
}
