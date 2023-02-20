import Amenity from '../../models/Amenity'
import { postAmenityService } from '../amenity'
import amenities from '../../utils/mockups/amenities.json'

export const amenityMockService = async () => {
    try {   
    const amenity = await Amenity.findOne()
    
    if (amenity === null) {
        amenities.forEach(async (amenity:any) => {
                await postAmenityService(amenity)
        })
        }
    } catch (error) {
        return error
    }
}
