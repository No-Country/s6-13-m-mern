import { INotification } from '../../interfaces'
import Notification from '../../models/Notification'

export const putNotificationService = async (id: string, body: INotification) => {
  try {
    const notificationUpdate = await Notification.findByIdAndUpdate(id, body, {
      new: true,
    }).select(
      '-createdAt -updatedAt'
    )
  
    if(notificationUpdate){
      const { consortium, creationDate, subject, description, issuer, type } = notificationUpdate
      const response = {
        status: 200,
        msg: 'Notification actualizada con exito',
        amenity: { consortium, creationDate, subject, description, issuer, type },
        ok: true
      }
      return response
    }
  
    const response = {
      status: 404,
      msg: 'Notification no encontrada',
      ok: false
    }
    return response
   } catch (error) {
    return (error)
   }
}