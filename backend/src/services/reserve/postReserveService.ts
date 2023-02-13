import { IReserve } from '../../interfaces'
import Reserve from '../../models/Reserve'

export const postReserveService = async (reserve: IReserve) => {
    try {
        const findByName = await Reserve.findOne({
            //! Ver aca ahora que hay dos fechas de inicio y fin
            startDate: reserve.startDate,
        })
        if (findByName === null) {
            const reserveToCreate = await Reserve.create(reserve)
            await reserveToCreate.save()

            const { user, startDate, endDate } = reserveToCreate

            const response = {
                msg: 'Reserve created',
                status: 200,
                ok: true,
                user,
                startDate,
                endDate,
            }
            return response
        }
        const response = {
            status: 404,
            msg: 'Reserve already created',
            ok: false,
        }
        return response
    } catch (error) {
        return error
    }
}
