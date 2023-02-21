import { ObjectId } from 'mongoose'
export interface IConsortium {
    name: string
    address: string
    users: ObjectId[] | string[] | array
    admin: ObjectId
    floor: number
    apt: number
    amenities: ObjectId[]
    schedule: ObjectId
}
