import Schedule from '../../models/Schedule'

export const getScheduleService = async(id: string) => {
  if(id !== 'all'){
    try {
      const scheduleRetrieved = await Schedule.findById(id).select(
        '-createdAt -updatedAt'
      )
  
    if(!scheduleRetrieved){
      const response = {
        ok: false,
        status: 404,
      }
      return response
    }
      const response = {
        ok: true,
        status: 200,
        scheduleRetrieved
      }
      return response
    } catch(error) {
      return error
    }
  }
  const scheduleRetrieved = await Schedule.find().select(
    '-createdAt -updatedAt'
  )
  const response = {
    ok: true,
    status: 200,
    scheduleRetrieved
  }
  return response
}