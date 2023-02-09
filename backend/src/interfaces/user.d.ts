import { Types } from 'mongoose'
import { ERoles, EStatus } from '../utils/enums'

export interface IUser {
    name: string
    lastname: string
    email: string
    password: string
    role?: ERoles
    googleId: string
    isValidated: boolean
    externalId?: string
    status?: EStatus
    token: string
    apt: string
    consortium: Types.ObjectId[]
}
