import { ISchedule } from "../../interfaces"
import Schedule from "../../models/Schedule"

export const postScheduleService = async(schedule:ISchedule) => {
  try {
    const findByName = await Schedule.findOne({ name: schedule.name})

    if(findByName === null){
      const scheduleToCreate = await Schedule.create(schedule)
      await scheduleToCreate.save()

      const { name, reserved } = scheduleToCreate

      const response = {
        msg: 'Schedule created',
        status: 200,
        ok: true,
        name,
        reserved
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
    console.log(error)
    return error
  }
}