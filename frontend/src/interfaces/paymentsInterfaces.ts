export interface UserData {
  _id: string
  name: string
  lastname: string
  email: string
  img: string
  phone: string
  apt: string
}

export interface PaymentsValues {
  _id: string
  creationDate: string
  pStatus: string
  note: string
  user: UserData
  ammount: string
  paymentMethod: string
  image: string
  status: string
  createdAt: string
  updatedAt: string
}

interface UserData2 {
  _id: string
  name: string
  lastname: string
  email: string
  img: string
  phone: string
}

export interface UserPaymentsValues {
  _id: string
  creationDate: string
  pStatus: string
  note: string
  user: UserData2
  ammount: string
  paymentMethod: string
  image: string
  status: string
}

export interface PaymentData {
  note: string
  ammount: string
  paymentMethod: string
  image: string | null
}
