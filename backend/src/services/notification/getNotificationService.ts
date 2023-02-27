import Notification from "../../models/Notification";

export const getNotificationService = async(idConsortium: string)=> {
  if(idConsortium){
    try {
      const notificationRetrived = await Notification.find({consortium:idConsortium}).select('-createdAt -updateAt');

      if(!notificationRetrived){
        const response = {
          ok: false,
          status: 404,
        }
        return response
      }
      const response = {
        ok:true,
        status: 200,
        notificationRetrived
      }
      return response
    } catch (error) {
      return error
    }
  }
}