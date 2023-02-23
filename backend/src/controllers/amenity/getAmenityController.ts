import { Response, Request } from 'express'
import { getAmenityService } from '../../services/amenity/getAmenityService'
import { IResponse } from '../../interfaces'

export const getAmenityController = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const amenityRetrieved = (await getAmenityService(id)) as IResponse

        const { status } = amenityRetrieved
        return res.status(status).json(amenityRetrieved)
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error,
        })
    }
}
