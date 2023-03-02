export const isValidAmountFormat = (value: string) => {
  const regex = /^[1-9]\d*(\.\d{0,2})?$/
  return regex.test(value)
}

export const isValidNumber = (value: string) => {
  const regex = /^\d+$/
  return regex.test(value)
}

export const isValidApt = (value: string) => {
  const regex = /^(|[1-9]|[1-9][0-9])$/
  return regex.test(value)
}

export const isValidName = (value: string) => {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/
  return regex.test(value)
}
