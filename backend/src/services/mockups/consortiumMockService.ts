import Consortium from '../../models/Consortium'
import { createConsortiumService } from '../consortium'
import consortiums from '../../utils/mockups/consortium.json'

export const consortiumMockService = async () => {
    const isUser = await Consortium.findOne()

    if (!isUser) {
        consortiums.forEach(async (consortium: any) => {
            try {
                await createConsortiumService(consortium)
            } catch (error) {
                return error
            }
        })
    }
}
