export interface ISchedule {
    _id?: Types.ObjectId
    name: string
    reserve: Types.ObjectId
    status: EStatus
    amenity: amenity.id
}
