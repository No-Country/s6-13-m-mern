export interface PaymentsValues {
  id_: string
  name: string
  vouchers: string
  amount: string
  method: string
  status: string
}

export interface PaymentData {
  note: string
  ammount: string
  paymentMethod: string
  image: string | null
}
