export interface ConsortiaData {
  _id: string
  name: string
  address: string
  users: string[]
  admin: string
  floor: number
  apt: number
  amenities?: Amenity[]
  payments?: []
  status: string
}

export interface Amenity {
  _id: string
  name: string
}
