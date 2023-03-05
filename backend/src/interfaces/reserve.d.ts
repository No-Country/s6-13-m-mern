export interface IReserve {
    _id?: Types.ObjectId
    user: user.id
    startDate: date
    endDate: date
    startHour:string
    endHour:string
    status: EReserve
    amenity: Types.ObjectId
    consortium: Types.ObjectId
}
