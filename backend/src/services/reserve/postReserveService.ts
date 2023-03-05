import { IReserve } from '../../interfaces'
import Reserve from '../../models/Reserve'

export const postReserveService = async (reserve: IReserve) => {
    try {
        const findByName = await Reserve.findOne({
            startDate: reserve.startDate,
            endDate: reserve.endDate
        })
        if (findByName === null) {
            const reserveToCreate = await Reserve.create(reserve)
            await reserveToCreate.save()

            const { user, startDate, endDate, startHour, endHour, amenity, consortium } = reserveToCreate

            const response = {
                msg: 'Reserve created',
                status: 200,
                ok: true,
                user,
                startDate,
                endDate,
                startHour,
                endHour,
                amenity,
                consortium
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
