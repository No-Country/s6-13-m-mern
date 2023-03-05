export interface INotification {
  _id: Types.ObjectId
  consortium: Types.Object
  creationDate: date
  subject: string
  description: string
  status: EStatusNot
  issuer: Types.ObjectId
  type: EType
}
