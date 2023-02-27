export interface UserProfile {
  _id: string
  name: string
  lastname: string
  email: string
  img?: string
  phone?: string
  role: string
  isValidated: boolean
  status: boolean
  apt?: string
  consortium?: UserConsortia[]
}

interface UserConsortia {
  _id: string
  address: string
  admin: Admin
}

interface Admin {
  email: string
  lastname: string
  name: string
  _id: string
}

export interface IResponseUser {
  ok: boolean
  user: UserProfile
}
