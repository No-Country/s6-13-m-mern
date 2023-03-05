import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { deleteNotificationService } from '../../services'

export const deleteNotificationController = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const notificationRetrieved = (await deleteNotificationService(id)) as IResponse
    const { status } = notificationRetrieved

    return res.status(status).json(notificationRetrieved)
} catch (error) {
    return res.status(500).json({
        error,
    })
}
}