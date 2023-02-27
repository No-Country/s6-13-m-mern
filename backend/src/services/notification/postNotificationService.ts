import { INotification } from '../../interfaces'
import Notification from '../../models/Notification'

export const postNotificationService = async (notification: INotification) => {
    try {
        const notificationToCreate = await Notification.create(notification)
        await notificationToCreate.save()

        const { consortium, creationDate, subject, description, issuer, type } =
            notificationToCreate

        const response = {
            msg: 'Notification created',
            status: 200,
            ok: true,
            consortium,
            creationDate,
            subject,
            description,
            issuer,
            type,
        }
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}
