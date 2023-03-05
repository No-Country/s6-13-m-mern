import { ISchedule } from '../../interfaces'
import Schedule from '../../models/Schedule'

export const postScheduleService = async (schedule: ISchedule) => {
    try {
        const findByName = await Schedule.findOne({})

        if (findByName === null) {
            const scheduleToCreate = await Schedule.create(schedule)
            await scheduleToCreate.save()

            const { reserve } = scheduleToCreate

            const response = {
                msg: 'Schedule created',
                status: 200,
                ok: true,
                reserve,
            }
            return response
        }
        const response = {
            status: 404,
            msg: 'Schedule already created',
            ok: false,
        }
        return response
    } catch (error) {
        return error
    }
}
