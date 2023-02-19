import User from '../../models/User'

export const validateUserService = async (id: string) => {
    const user = await User.findById(id)

    if (!user) {
        const response = {
            ok: false,
            status: 404,
        }

        return response
    }

    if (user.isValidated) {
        const response = {
            ok: false,
            status: 409,
        }
        return response
    }

    const response = {
        ok: true,
        status: 200,
        user,
    }

    return response
}
