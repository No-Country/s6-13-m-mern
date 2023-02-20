import { Types } from 'mongoose'
import { ERoles, EStatus } from '../utils/enums'

export interface IUser {
    _id?: Types.ObjectId | string
    name: string
    lastname: string
    email: string
    password: string
    img?: string
    phone?: string
    role?: ERoles | string
    externalId?: string
    isValidated?: boolean
    externalId?: string
    status?: EStatus
    token?: string
    apt?: string
    consortium?: Types.ObjectId[] | string[]
}
