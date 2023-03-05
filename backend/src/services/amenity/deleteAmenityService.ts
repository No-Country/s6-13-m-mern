import Amenity from '../../models/Amenity'

export const deleteAmenityService = async (id: string) => {
    try {
        const amenityDeleted = await Amenity.findByIdAndDelete({ _id: id })

        if (amenityDeleted) {
            const { id } = amenityDeleted
            const response = {
                status: 200,
                msg: 'Amenity eliminada con exito',
                ok: true,
                id,
            }
            return response
        }
        const response = {
            staus: 404,
            msg: 'Amenity no encontrada',
            ok: false,
        }
        return response
    } catch (error) {
        return error
    }
}
