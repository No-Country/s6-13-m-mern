import User from '../../models/User'

export const getUserService = async (id: string) => {
    try {
        const user = await User.findById(id).select(
            '-password -createdAt -updatedAt -externalId -token -isValidated'
        )

        if (!user) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }

        if (user.status !== 'active') {
            const response = {
                ok: false,
                status: 401,
            }
            return response
        }

        const response = {
            ok: true,
            status: 200,
            user,
        }
        return response
    } catch (error) {
        return error
    }
}
