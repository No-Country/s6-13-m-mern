import Schedule from "../../models/Schedule"

export const deleteScheduleService = async(id: string) => {
  try {
    const scheduleDeleted = await Schedule.findByIdAndDelete({ _id: id})

    if(scheduleDeleted){
      const { id } = scheduleDeleted
      const response = {
        status: 200,
        msg: 'Schedule eliminada con exito',
        ok: true,
        id
      }
      return response
    }
    const response = {
      staus: 404,
      msg: 'Schedule no encontrada',
      ok: false
    }
    return response
  } catch (error) {
      return error
  }
}