import User from '../../models/User'

export const getAllUsersService = async () => {
    try {
        const allUsers = await User.find({ status: 'active' })
            .select(
                '-password -createdAt -updatedAt -externalId -token -isValidated'
            )
            .populate({
                path: 'consortium',
                select: 'address img',
            })

        if (allUsers.length < 1) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }

        const response = {
            ok: true,
            status: 200,
            user: allUsers,
        }
        return response
    } catch (error) {
        return error
    }
}
