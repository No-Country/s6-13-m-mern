import User from '../../models/User'

export const deleteUSerService = async (id: string) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id)
        console.log(deletedUser)
        if (!deletedUser) {
            const response = {
                ok: false,
                status: 404,
            }
            return response
        }
        const response = {
            ok: true,
            status: 200,
        }
        return response
    } catch (error) {
        return error
    }
}
