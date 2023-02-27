import Consortium from '../../models/Consortium'
import { createConsortiumService } from '../consortium'
import consortiums from '../../utils/mockups/consortium.json'

export const consortiumMockService = async () => {
    try {
        const isConsortium = await Consortium.findOne()

        if (isConsortium === null) {
            consortiums.forEach(async (consortiumMock) => {
                await createConsortiumService(consortiumMock)
            })
        }
    } catch (error) {
        return error
    }
}
