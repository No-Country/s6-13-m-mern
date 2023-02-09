import { Response, Request } from 'express'
import { getScheduleService } from '../../services/schedule/getScheduleService'
import { IResponse } from '../../interfaces'

export const getScheduleController = async(req: Request, res: Response) => {
  const {id} = req.params

        console.log(id)

  try {
    const scheduleRetrieved = (await getScheduleService(id)) as IResponse

    const { status } = scheduleRetrieved
    return res.status(status).json(scheduleRetrieved)
  } catch(error){
    return res.status(500).json({
      ok: false,
      error,
    })
  }
}