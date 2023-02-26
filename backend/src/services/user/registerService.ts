import { IUser } from '../../interfaces'
import User from '../../models/User'
import { hashPassword } from '../../utils'

export const registerService = async (user: IUser) => {
    let {
        _id,
        name,
        lastname,
        email,
        password,
        phone,
        isValidated,
        role,
        img,
    } = user
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
        let newUser
        if (_id) {
            newUser = new User({
                _id,
                name,
                lastname,
                email,
                password,
                phone,
                isValidated,
                role,
                img,
            })
        } else {
            newUser = new User({
                name,
                lastname,
                email,
                password,
                phone,
                img,
            })
        }
        const response = {
            status: 201,
            ok: true,
            user: newUser,
        }

        return response
    } catch (error) {
        console.log(error)
        // throw new Error(error.message)
        return error
    }
}
