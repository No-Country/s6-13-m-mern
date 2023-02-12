import User from '../../models/User'

export const forgetPasswordService = async (email: string) => {
    try {
        const existUser = await User.findOne({ email })
        if (!existUser) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }
        const response = {
            ok: true,
            status: 200,
            user: { mail: existUser.email },
        }
        return response
    } catch (error) {
        return error
    }
}
