import Consortium from './../../models/Consortium'
import User from './../../models/User'

export const createConsortiumService = async (body: any) => {
    try {
        const { userId, name, address, floor, apt, amenities } = body.data
        const creator = await User.findOne({ _id: userId })

        if (!creator)
            return {
                ok: false,
                status: 404,
                error: 'Email/Usuario no encontrado',
            }

        if (!creator)
            return {
                ok: false,
                status: 404,
                error: 'Email/Usuario no encontrado',
            }

        const consortium = await Consortium.create({
            name,
            address,
            admin: creator._id,
            floor: Number(floor),
            apt: Number(apt),
            amenities
        })
        await consortium.save()

        const { modifiedCount } = await User.updateOne(
            {
                _id: userId,
            },
            {
                $addToSet: {
                    consortium: consortium._id,
                },
            }
        )

        if (!modifiedCount) {
            return {
                ok: false,
                status: 400,
                error: 'Error al asignarle un consorcio al administrador',
            }
        }

        return {
            ok: true,
            status: 200,
            consortium,
        }
    } catch (error: any) {
        return error
    }
}
