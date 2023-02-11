import User from '../../models/User'
import { EStatus } from '../../utils'

export const deleteUSerService = async (id: string) => {
    try {
        const deletedUser = await User.findById(id)

        if (!deletedUser) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }

        deletedUser.status = EStatus.disabled
        await deletedUser.save()
        const response = {
            ok: true,
            status: 200,
        }
        return response
    } catch (error) {
        return error
    }
}
