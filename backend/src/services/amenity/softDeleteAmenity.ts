import Reserve from '../../models/Reserve'

export const softDeleteAmenity = async (id: string) => {
    if(id){

        try {
            let amenityReserveSoftDeleted = null
        let amenitySoftDeleted = null
        if (amenityReserveSoftDeleted === null) {
            amenityReserveSoftDeleted = await Reserve.find({ amenity: id })
            if (amenityReserveSoftDeleted) {
                for (let i = 0; i < amenityReserveSoftDeleted.length; i++) {
                    const { id } = amenityReserveSoftDeleted[i]
                    await Reserve.findOneAndDelete({ _id: id })
                }
                const response = {
                    status: 200,
                    msg: 'Amenity/Reserve eliminada con exito',
                    ok: true,
                    id,
                }
                return response
            }
        }
        if (amenitySoftDeleted === null) {
            amenitySoftDeleted = await Reserve.find({ amenity: id })
            if (amenitySoftDeleted) {
                for (let i = 0; i < amenitySoftDeleted.length; i++) {
                    const { id } = amenitySoftDeleted[i]
                    await Reserve.findOneAndDelete({ _id: id })
                }
                const response = {
                    status: 200,
                    msg: 'Amenity/Reserve eliminada con exito',
                    ok: true,
                    id,
                }
                return response
            }
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
}
