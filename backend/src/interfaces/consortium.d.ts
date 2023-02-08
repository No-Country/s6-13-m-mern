import { ObjectId } from 'mongoose'

export interface IConsortium {
    name: string
    address: string
    users: ObjectId[]
    admin: ObjectId
    floor: number
    apt: number
    amenities: ObjectId[]
}
