import User from '../../models/User'
import { registerService } from '../user'
import users from '../../utils/mockups/user.json'

export const userMockService = async () => {
    const isUser = await User.findOne()

    if (!isUser) {
        users.forEach(async (user: any) => {
            try {
                await registerService(user)
            } catch (error) {
                return error
            }
        })
    }
}
