import Schedule from '../../models/Schedule'
import { postScheduleService } from '../schedule'
import schedules from '../../utils/mockups/schedule.json'

export const scheduleMockService = async () => {
    try {
    const schedule = await Schedule.findOne()

    if (schedule === null) {
      schedules.forEach(async (schedule:any) => {
                await postScheduleService(schedule)

        })
    }
    } catch (error) {
        return error
    }
}