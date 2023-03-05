import { Types } from 'mongoose'
import { EStatus } from '../utils/enums'
export interface IConsortium {
    _id?: Types.ObjectId | string
    name: string
    address: string
    users: Types.ObjectId[] | string[]
    admin: Types.ObjectId | string
    floor: number
    apt: number
    img?: string
    amenities?: Types.ObjectId[] | string[]
    schedule?: Types.ObjectId | string | null
    payments?: Types.ObjectId[] | string[]
    status?: EStatus
}
