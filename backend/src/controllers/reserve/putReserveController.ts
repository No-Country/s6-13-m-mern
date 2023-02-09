import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { putReserveService } from '../../services/reserve/putReserveService'

export const putReserveController = async(req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req
console.log(body)
  try {
  const reserveRetrived = (await putReserveService(id, body)) as IResponse  
  const { status } = reserveRetrived
  
  return res.status(status).json(reserveRetrived)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}