import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { deleteScheduleService } from '../../services/schedule/deleteScheduleService'

export const deleteScheduleController = async(req: Request, res: Response) =>{
  const { id } = req.params

  console.log(id)
  try {
    const scheduleRetrieved = (await deleteScheduleService(id)) as IResponse
    const { status } = scheduleRetrieved
    return res.status(status).json(scheduleRetrieved)
  } catch (error) {
    console.log(error)
      return res.status(500).json({
        error
      })
  }
}