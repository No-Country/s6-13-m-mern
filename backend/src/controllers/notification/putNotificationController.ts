import { Request, Response } from 'express'
import { IResponse } from '../../interfaces'
import { putNotificationService } from '../../services'

export const putNotificationController = async (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req

  try {
      const notificationRetrived = (await putNotificationService(id, body)) as IResponse
      const { status } = notificationRetrived

      return res.status(status).json(notificationRetrived)
  } catch (error) {
      return res.status(500).json(error)
  }
}