import { IReserve } from "../../interfaces"
import Reserve from "../../models/Reserve"

export const postReserveService = async(reserve:IReserve) => {
  try {
    const findByName = await Reserve.findOne({ date: reserve.date})
    if(findByName === null){
      const reserveToCreate = await Reserve.create(reserve)
      await reserveToCreate.save()

      const { user, date } = reserveToCreate

      const response = {
        msg: 'Reserve created',
        status: 200,
        ok: true,
        user,
        date
      }
      return response
    }
    const response = {
      status: 404,
      msg: 'Reserve already created',
      ok: false,
    }
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}