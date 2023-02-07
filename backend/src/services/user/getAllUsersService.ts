import User from '../../models/User'

export const getAllUsersService = async () => {
    try {
        const allUsers = await User.find().select(
            '-password -createdAt -updatedAt -externalId -token -isValidated'
        )
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
