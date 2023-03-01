export const formatMonthAndYear = (date: string) => {
  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })
  return formattedDate
}

export const formatDate = (date: string) => {
  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
  return formattedDate
}
