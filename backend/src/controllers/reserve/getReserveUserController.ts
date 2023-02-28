import { Response, Request } from 'express'
import { getReserveUserService } from '../../services/reserve/getReserveUserService'
import { IResponse } from '../../interfaces'

export const getReserveUserController = async(req: Request, res: Response) => {
  const {idUser} = req.params

  try {
    const reserveRetrieved = (await getReserveUserService(idUser)) as IResponse

    const { status } = reserveRetrieved
    return res.status(status).json(reserveRetrieved)
  } catch(error){
    return res.status(500).json({
      ok: false,
      error,
    })
  }
}