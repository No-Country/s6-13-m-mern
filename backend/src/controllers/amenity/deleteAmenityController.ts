import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { deleteAmenityService, softDeleteAmenity } from '../../services/amenity'

export const deleteAmenityController = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const amenityRetrieved = (await deleteAmenityService(id)) as IResponse
        const { status } = amenityRetrieved
        
        if(status === 200) (await softDeleteAmenity(id)) as IResponse

        return res.status(status).json(amenityRetrieved)
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}
