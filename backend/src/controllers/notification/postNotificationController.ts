import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { postNotificationService } from '../../services/notification/postNotificationService'

export const postNotificationController = async (
    req: Request,
    res: Response
) => {
    const notification = req.body

    try {
        const notificationRetrieved = (await postNotificationService(
            notification
        )) as IResponse

        const { status } = notificationRetrieved

        return res.status(status).json(notificationRetrieved)
    } catch (error) {
        return res.status(500).json({
            error,
        })
    }
}
