import { ObjectId } from 'mongoose'
import { User } from './user'

export interface IResponse {
    ok: boolean
    msg?: string
    user?: User
    status: number
    token?: string
    code?: number
    id?: ObjectId
}
