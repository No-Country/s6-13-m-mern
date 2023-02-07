import User from '../../models/User'

export const loginService = async (email: string) => {
    try {
        const user = await User.findOne({ email })

        if (!user) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }

        if (user.isValidated === false) {
            const response = {
                ok: false,
                status: 401,
                id: user._id,
            }
            return response
        }

        const response = { ok: true, status: 200, user }
        return response
    } catch (error) {
        return error
    }
}
