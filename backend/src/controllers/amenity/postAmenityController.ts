import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { postAmenityService } from '../../services/amenity/postAmenityService'

export const postAmenityController = async (req: Request, res: Response) => {
    const amenity = req.body

    try {
        const amenityRetrieved = (await postAmenityService(
            amenity
        )) as IResponse

        const { status } = amenityRetrieved

        return res.status(status).json(amenityRetrieved)
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}
