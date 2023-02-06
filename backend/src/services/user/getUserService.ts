import User from '../../models/User'


export const getUserService = async (id: string) => {
    try{
        const user = await User.findById(id)
        if(!user){
            const response = {
                ok: false,
                status: 404
            }
            return response
        }
        const response = {
            ok: true,
            status: 200,
            user
        }
        return response
    }catch(e){
        const response = {
            ok: false,
            status: 500
        }
        return response
    }
}