import { Schema, model, Document } from "mongoose";
// TODO
// Uncomment import below when push to dev
// import { IUser } from "./User.js";
// Replace interface types (users/admin/amenities) with their own interfaces, ex:
// users: IUsers[]
export interface IConsortium extends Document {
  name: string,
  address: string,
  users: string[],
  admin: string,
  floor: number,
  apt: number,
  amenities: string[]
};

const consortiumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  floor: {
    type: Number,
    required: true
  },
  apt: {
    type: Number,
    required: true
  },
  amenities: [
    {
      tpe: Schema.Types.ObjectId,
      ref: 'Amenity'
    }
  ]
});

export default model<IConsortium>("Consortium", consortiumSchema);