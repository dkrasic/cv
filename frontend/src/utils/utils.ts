export const getMillisFromDateString = (dateString: string): number => {
  const date = new Date(dateString)
  //   console.log('date:" ', date)
  //   console.log('millis: ', date.getTime())
  return date.getTime()
}

export const getFormattedDate = (date: Date): string => {
  return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
}
