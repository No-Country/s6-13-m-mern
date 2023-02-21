import Reserve from '../../models/Reserve'
import { postReserveService } from '../reserve'
import reserves from '../../utils/mockups/reserves.json'

export const reserveMockService = async () => {
    try {
    const reserve = await Reserve.findOne()

    if (reserve === null) {
      reserves.forEach(async (reserve:any) => {
                await postReserveService(reserve)

        })
    }
    } catch (error) {
        return error
    }
}
