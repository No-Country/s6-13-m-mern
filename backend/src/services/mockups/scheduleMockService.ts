import Schedule from '../../models/Schedule'
import { postScheduleService } from '../schedule'
import schedules from '../../utils/mockups/schedule.json'

export const scheduleMockService = async () => {
    const schedule = await Schedule.findOne()

    if (!schedule) {
      schedules.forEach(async (schedule:any) => {
            try {
                await postScheduleService(schedule)
            } catch (error) {
                return error
            }
        })
    }
}