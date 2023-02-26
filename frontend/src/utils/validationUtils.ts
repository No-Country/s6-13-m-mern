export const isValidAmountFormat = (value: string) => {
  const regex = /^\d*\.?\d{0,2}$/
  if (regex.test(value)) return true
  return false
}
