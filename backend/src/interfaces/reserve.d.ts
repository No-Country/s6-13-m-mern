export interface IReserve {
    _id?: Types.ObjectId
    user: user.id
    startDate: date
    endDate: date
    status: EStatus
}
