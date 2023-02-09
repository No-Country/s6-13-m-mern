import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { putAmenityService } from '../../services/amenity/putAmenityService'

export const putAmenityController = async(req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req
console.log(body)
  try {
  const amenityRetrived = (await putAmenityService(id, body)) as IResponse  
  const { status } = amenityRetrived
  
  return res.status(status).json(amenityRetrived)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}