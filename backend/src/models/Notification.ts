import { Schema, model, Types } from 'mongoose'
import { EStatusNot, EType } from '../utils'
import { INotification } from '../interfaces'

const notificationSchema = new Schema<INotification>(
  {
    consortium: {
      type: Types.ObjectId,
      required: true,
      ref: 'Consortium',
    },
    creationDate: {
      type: Date,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: EStatusNot,
      default: 'active',

    },
    issuer: {
      type: Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      enum: EType,
      required: true,
    },
  },
  {
      timestamps: true,
      versionKey: false,
  }
)

const Notification = model('Notification', notificationSchema)
export default Notification


// import { Schema, model, Types } from 'mongoose'
// import { INotification } from '../interfaces'
// import { EStatusNot, EType } from '../utils'

// const notificationSchema = new Schema<INotification>(
//     {
//       creationDate: {
//         type: Date,
//         required: true,
//       },
//       subject: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       status: {
//         type: String,
//         enum: EStatusNot,
//         default: 'active',

//       },
//       issuer: {
//         type: Types.ObjectId,
//         required: true,
//       },
//       type: {
//         enum: EType,
//         required: true,
//       },
//     },
//     {
//         timestamps: true,
//         versionKey: false,
//     }
// )

// const Notification = model('Notification', notificationSchema)
// export default Notification