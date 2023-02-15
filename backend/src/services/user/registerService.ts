import { IUser } from '../../interfaces'
import User from '../../models/User'
import { hashPassword } from '../../utils'

export const registerService = async (user: IUser) => {
    let { name, lastname, email, password, phone } = user
    try {
        const existsUser = await User.findOne({ email })
        if (existsUser) {
            const response = {
                ok: false,
                status: 400,
            }
            return response
        }
        password = await hashPassword(password)
        phone = phone || ''
        const newUser = new User({
            name,
            lastname,
            email,
            password,
            phone,
        })
        await newUser.save()
        const response = {
            status: 201,
            ok: true,
        }
        return response
    } catch (error) {
        console.log(error)
        // throw new Error(error.message)
        return error
    }
}
