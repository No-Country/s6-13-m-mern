export interface IAmenity {
    id: Types.ObjectId
    name: string
    description: string
    reservable: boolean
    img: string
    size: number
    schedule: Types.ObjectId
}
