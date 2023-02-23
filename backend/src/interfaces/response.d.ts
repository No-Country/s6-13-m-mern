import { ObjectId } from 'mongoose'
import { User } from './user'
import { Consortium } from './consortium'
import { Payment } from './payment'
export interface IResponse {
    ok: boolean
    msg?: string
    status: number
    token?: string
    code?: number
    id?: ObjectId
    user?: User
    consortiumRetrieved?: Consortium
    payment?: Payment
}
