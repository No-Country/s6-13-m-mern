import { IUser } from '../../interfaces'
import User from '../../models/User'

export const edituserService = async (id: string, data: IUser) => {
    console.log(typeof id)
    try {
        const updatedUser = await User.findByIdAndUpdate(id, data, {
            new: true,
        }).select(
            '-password -createdAt -updatedAt -externalId -token -isValidated'
        )

        if (!updatedUser) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }

        const response = {
            ok: true,
            status: 200,
            user: updatedUser,
        }
        return response
    } catch (error) {
        return error
    }
}
