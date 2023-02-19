import User from '../../models/User'
import { registerService } from '../user'
import users from '../../utils/mockups/user.json'

export const userMockService = async () => {
    try {
        const isUser = await User.findOne()

        if (!isUser) {
            users.forEach(async (user) => {
                await registerService(user)
            })
        }
    } catch (error) {
        return error
    }
}
