export interface IAmenity {
    _id: Types.ObjectId
    name: string
    description: string
    reservable: boolean
    img: string
    size: number
    reserve: Types.ObjectId
    consortium: Types.ObjectId
    schedule: Types.ObjectId
}
