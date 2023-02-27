export interface AmenitiesListInt {
  value: string
  label: string
  id: string
}

export interface FormValues {
  name: string
  address: string
  floor: string
  apt: string
  amenities: [AmenitiesListInt]
}

export interface ConsortiumCreationValues extends Omit<FormValues, 'amenities'> {
  admin: string | undefined
  amenities: string[]
}

export interface ConsortiumStateValues {
  amenitiesList: AmenitiesListInt[]
  openModal: boolean
  load: boolean
  message: string
}
