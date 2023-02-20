import Amenity from '../../models/Amenity'
import { postAmenityService } from '../amenity'
import amenities from '../../utils/mockups/amenities.json'

export const amenityMockService = async () => {
    const amenity = await Amenity.findOne()

    if (!amenity) {
      amenities.forEach(async (amenity:any) => {
            try {
                await postAmenityService(amenity)
            } catch (error) {
                return error
            }
        })
    }
}
