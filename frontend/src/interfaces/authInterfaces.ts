export interface LoginValues {
  email: string
  password: string
}

export interface FormRegisterData {
  email: string
  password: string
  password2: string
  name: string
  lastname: string
  phone?: string
  check: boolean
}

export interface RegisterData {
  email: string
  password: string
  name: string
  lastname: string
}
