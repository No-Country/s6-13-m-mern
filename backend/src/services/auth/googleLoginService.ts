import User from '../../models/User'
import { ERoles, hashPassword, jwtGenerate } from '../../utils'

export const googleLoginService = async (
    name: string,
    lastname: string,
    picture: string,
    sub: string,
    email: string
) => {
    try {
        const user = await User.findOne({
            email,
            status: 'active',
        })

        if (!user) {
            const newUser = new User({
                name,
                lastname,
                email,
                password: 'Mipassword123!',
                img: picture,
                externalId: sub,
                isValidated: true,
            })

            newUser.password = await hashPassword(newUser.password)
            const token = jwtGenerate(newUser.id, ERoles.user, '1d')
            await newUser.save()

            const response = { ok: false, token, user: newUser }
            return response
        }

        const response = { ok: true, user }
        return response
    } catch (error) {
        return error
    }
}
