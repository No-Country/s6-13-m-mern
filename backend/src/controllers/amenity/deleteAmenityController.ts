import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { deleteAmenityService } from '../../services/amenity/deleteAmenityService'

export const deleteAmenityController = async (req: Request, res: Response) => {
    const { id } = req.params

    console.log(id)
    try {
        const amenityRetrieved = (await deleteAmenityService(id)) as IResponse
        console.log(amenityRetrieved)
        const { status } = amenityRetrieved
        return res.status(status).json(amenityRetrieved)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error,
        })
    }
}
