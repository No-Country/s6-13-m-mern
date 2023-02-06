import { Types } from "mongoose";
import { EStatus } from "../utils/enums";

export interface IUser {
    username: string,
    email: string,
    password: string,
    isAdmin: boolean,
    googleId: string,
    isValidated: boolean,
    externalId?: string,
    status?: EStatus,
    token: string,
    apt: string,
    consortium: Types.ObjectId[],
}