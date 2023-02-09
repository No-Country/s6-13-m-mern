import { IReserve } from "../../interfaces"
import Reserve from "../../models/Reserve"

export const putReserveService = async(id: string, body: IReserve) => {
 try {
  const reserveUpdate = await Reserve.findByIdAndUpdate(id, body, {
    new: true,
  }).select(
    '-createdAt -updatedAt'
  )

  if(reserveUpdate){
    const { user, date } = reserveUpdate
    const response = {
      status: 200,
      msg: 'Reserve actualizada con exito',
      reserve: { user, date },
      ok: true
    }
    return response
  }

  const response = {
    status: 404,
    msg: 'Reserve no encontrada',
    ok: false
  }
  return response
 } catch (error) {
  return (error)
 }
}