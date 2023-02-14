import {Request, Response} from 'express'
import { IResponse } from '../../interfaces'
import { postScheduleService } from '../../services/schedule/postScheduleService'

export const postScheduleController = async(req: Request, res: Response)=> {
  const schedule = req.body

  try{
    const scheduleRetrieved = (await postScheduleService(schedule)) as IResponse

    const { status } = scheduleRetrieved

    return res.status(status).json(scheduleRetrieved)
  } catch(error){
      return res.status(500).json({
        error
      })
  }
}