import User from '../../models/User'

export const registerService = async (
    name: string,
    lastname: string,
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

        const newUser = new User({ name, lastname, email, password })
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
