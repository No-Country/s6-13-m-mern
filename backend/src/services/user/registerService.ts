import User from '../../models/User'
import { hashPassword } from '../../utils'

export const registerService = async (
    username: string,
    email: string,
    password: string
) => {
    try {
        const user = await User.findOne({ email })
        if (user) {
            const response = {
                ok: false,
                status: 400,
            }
            return response
        }

        const hPassword = await hashPassword(password)
        const newUser = new User({ username, email, password: hPassword })
        await newUser.save()

        const response = {
            status: 201,
            ok: true,
        }

        return response
    } catch (error) {
        return error
    }
}
