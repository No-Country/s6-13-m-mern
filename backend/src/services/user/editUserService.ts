import User from '../../models/User'

export const edituserService = async (
    id: string,
    name: string,
    lastname: string,
    img: string,
    phone: string
) => {
    try {
        const data = {
            name,
            lastname,
            img,
            phone,
        }
        const updatedUser = await User.findByIdAndUpdate(id, data, {
            new: true,
        }).select('-password -createdAt -updatedAt -externalId')

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
