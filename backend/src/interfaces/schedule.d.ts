export interface ISchedule {
    _id?: Types.ObjectId
    consortium: consortium.id
    reserve: Types.ObjectId
    status: EStatus
    amenity: amenity.id
}
