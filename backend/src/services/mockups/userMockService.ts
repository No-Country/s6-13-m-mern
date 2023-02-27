import User from '../../models/User'
import { registerService } from '../user'
import users from '../../utils/mockups/user.json'
import { IResponse } from '../../interfaces'

export const userMockService = async () => {
    try {
        const isUser = await User.findOne()
        if (isUser === null) {
            users.forEach(async (userMock) => {
                const { user } = (await registerService(userMock)) as IResponse
                await user.save()
                console.log('first')
            })
        }
    } catch (error) {
        return error
    }
}
