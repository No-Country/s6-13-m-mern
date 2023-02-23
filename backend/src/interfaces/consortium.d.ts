import { ObjectId } from 'mongoose'
import { EStatus } from '../utils/enums'
export interface IConsortium {
    name: string
    address: string
    users: ObjectId[] | string[] | array
    admin: ObjectId
    floor: number
    apt: number
    img: string
    amenities: ObjectId[]
    schedule: ObjectId
    payments: ObjectId[] | string[]
    status?: EStatus
}
