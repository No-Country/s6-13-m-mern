import User from '../../models/User'

export const changePasswordService = async (id: string, password: string) => {
    const existsUser = await User.findById(id)

    if (!existsUser) {
        const response = {
            ok: false,
            status: 404,
        }
        return response
    }
    existsUser.password = password
    await existsUser.save()

    const response = {
        status: 201,
        ok: true,
    }

    return response
}
