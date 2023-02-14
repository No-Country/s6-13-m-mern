import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { putScheduleService } from '../../services/schedule/putScheduleService'

export const putScheduleController = async(req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req

  try {
  const scheduleRetrived = (await putScheduleService(id, body)) as IResponse  
  const { status } = scheduleRetrived
  
  return res.status(status).json(scheduleRetrived)
  } catch (error) {
    return res.status(500).json(error)
  }
}