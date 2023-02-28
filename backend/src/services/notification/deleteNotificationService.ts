import Notification from "../../models/Notification"

export const deleteNotificationService = async(id:string) => {
  try {
    const notificationDeleted = await Notification.findByIdAndDelete({ _id: id })

    if (notificationDeleted) {
        const { id } = notificationDeleted
        const response = {
            status: 200,
            msg: 'Notification eliminada con exito',
            ok: true,
            id,
        }
        return response
    }
    const response = {
        staus: 404,
        msg: 'Notification no encontrada',
        ok: false,
    }
    return response
} catch (error) {
    return error
}
}