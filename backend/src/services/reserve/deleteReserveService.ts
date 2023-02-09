import Reserve from "../../models/Reserve"

export const deleteReserveService = async(id: string) => {
  try {
    const reserveDeleted = await Reserve.findByIdAndDelete({ _id: id})

    if(reserveDeleted){
      const { id } = reserveDeleted
      const response = {
        status: 200,
        msg : 'Reserve eliminada con exito',
        ok: true,
        id
      }
      return response
    }
    const response = {
      staus: 404,
      msg: 'Reserve no encontrada',
      ok: false
    }
    return response
  } catch (error) {
      return error
  }
}