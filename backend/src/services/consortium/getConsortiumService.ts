import Consortium from '../../models/Consortium'

export const getConsortiumService = async (id: string) => {
    if (id !== 'all') {
        try {
            const consortiumRetrieved = await Consortium.findById(id)
                .select('-createdAt -updatedAt')
                .populate({
                    path: 'payments',
                    populate: {
                        path: 'user',
                        select: 'name lastname img phone email apt',
                    },
                })

            if (!consortiumRetrieved) {
                const response = {
                    ok: false,
                    status: 404,
                }
                return response
            }
            const response = {
                ok: true,
                status: 200,
                consortiumRetrieved,
            }
            return response
        } catch (error) {
            return error
        }
    }
    const consortiumRetrieved = await Consortium.find().select(
        '-createdAt -updatedAt'
    )
    const response = {
        ok: true,
        status: 200,
        consortiumRetrieved,
    }
    return response
}
