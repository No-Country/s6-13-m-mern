import { ObjectId } from "mongoose";
// TODO
// Uncomment import below when push to dev
// import { IUser } from "./User.js";
// Replace interface types (users/admin/amenities) with their own interfaces, ex:
// users: IUsers[]
export interface IConsortium {
  name: string,
  address: string,
  users: ObjectId[],
  admin: ObjectId,
  floor: number,
  apt: number,
  amenities: ObjectId[]
};