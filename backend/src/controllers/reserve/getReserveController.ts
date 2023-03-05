import { Response, Request } from 'express'
import { getReserveService } from '../../services/reserve/getReserveService'
import { IResponse } from '../../interfaces'

export const getReserveController = async(req: Request, res: Response) => {
  const {id} = req.params

  try {
    const reserveRetrieved = (await getReserveService(id)) as IResponse

    const { status } = reserveRetrieved
    return res.status(status).json(reserveRetrieved)
  } catch(error){
    return res.status(500).json({
      ok: false,
      error,
    })
  }
}