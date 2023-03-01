import Reserve from '../../models/Reserve'

export const getReserveUserService = async(idUser: string) => {
  if(idUser !== 'all'){
    try {
      const reserveRetrieved = await Reserve.find({user: idUser}).select(
        '-createdAt -updatedAt'
      )
  
    if(!reserveRetrieved){
      const response = {
        ok: false,
        status: 404,
      }
      return response
    }
      const response = {
        ok: true,
        status: 200,
        reserveRetrieved
      }
      return response
    } catch(error) {
      return error
    }
  }
  const reserveRetrieved = await Reserve.find().select(
    '-createdAt -updatedAt'
  )
  const response = {
    ok: true,
    status: 200,
    reserveRetrieved
  }
  return response
}