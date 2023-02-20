import Reserve from '../../models/Reserve'
import { postReserveService } from '../reserve'
import reserves from '../../utils/mockups/reserves.json'

export const reserveMockService = async () => {
    const reserve = await Reserve.findOne()

    if (!reserve) {
      reserves.forEach(async (reserve:any) => {
            try {
                await postReserveService(reserve)
            } catch (error) {
                return error
            }
        })
    }
}
