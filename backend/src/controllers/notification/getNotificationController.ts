import { Response, Request } from 'express'
import { getNotificationService } from '../../services'
import { IResponse } from '../../interfaces'

export const getNotificationController = async (req: Request, res: Response) => {
  const { idConsortium } = req.params

  try {
      const notificationRetrieved = (await getNotificationService(idConsortium)) as IResponse

      const { status } = notificationRetrieved
      return res.status(status).json(notificationRetrieved)
  } catch (error) {
      return res.status(500).json({
          ok: false,
          error,
      })
  }
}