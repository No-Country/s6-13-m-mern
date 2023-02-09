import { ISchedule } from "../../interfaces"
import Schedule from "../../models/Schedule"

export const putScheduleService = async(id: string, body: ISchedule) => {
 try {
  const scheduleUpdate = await Schedule.findByIdAndUpdate(id, body, {
    new: true,
  }).select(
    '-createdAt -updatedAt'
  )

  if(scheduleUpdate){
    const { name, reserved } = scheduleUpdate
    const response = {
      status: 200,
      msg: 'Schedule actualizada con exito',
      schedule: { name,reserved },
      ok: true
    }
    return response
  }

  const response = {
    status: 404,
    msg: 'Schedule no encontrada',
    ok: false
  }
  return response
 } catch (error) {
  return (error)
 }
}