import { Amenity } from './amenitiesInterfaces'

export interface Reserve {
  _id?: string
  user: string
  startDate: string
  endDate: string
  startHour: string
  endHour: string
  status: string
  amenity: string
  consortium: string
}
export interface GetReserve {
  _id?: string
  user: string
  startDate: string
  endDate: string
  startHour: string
  endHour: string
  status: string
  amenity: Amenity
  consortium: string
}
