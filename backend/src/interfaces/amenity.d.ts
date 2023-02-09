export interface IAmenity {
    id: Types.ObjectId
    name: String
    description: String
    reservable: Boolean
    img: string
    size: Number
    schedule: Types.ObjectId
}
