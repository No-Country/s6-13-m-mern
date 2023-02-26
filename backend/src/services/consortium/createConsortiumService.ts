import Consortium from './../../models/Consortium'
import User from './../../models/User'
import { IConsortium } from '../../interfaces/consortium'

export const createConsortiumService = async (data: IConsortium) => {
    try {
        const {
            _id,
            name,
            address,
            users,
            admin,
            floor,
            apt,
            schedule,
            img,
            amenities,
            payments,
        } = data
        const creator = await User.findOne({ _id: admin })
        console.log(creator)

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

        const consortium = new Consortium({
            _id,
            name,
            address,
            admin,
            floor,
            apt,
            users,
            schedule,
            img,
            amenities,
            payments,
        })

        await consortium.save()

        const { modifiedCount } = await User.updateOne(
            {
                _id: admin,
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

        console.log('llego aca?')

        return {
            ok: true,
            status: 200,
            consortium,
        }
    } catch (error: any) {
        return error
    }
}
