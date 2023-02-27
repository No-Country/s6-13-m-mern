export const convertDate = (date: string) => {
  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })
  return formattedDate
}
