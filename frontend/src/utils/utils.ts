export const getMillisFromDateString = (dateString: string): number => {
  const date = new Date(dateString)
  return date.getTime()
}

export const getFormattedDate = (date: Date): string => {
  return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
}

export const setCookie = (name: string, value: string, expiresInDays: number): void => {
  const date = new Date()
  date.setTime(date.getTime() + expiresInDays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`
}

export const getCookie = (name: string): string | null => {
  const nameEQ = name + '='
  const cookiesArray = document.cookie.split(';')
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim()
    if (cookie.startsWith(nameEQ)) {
      return decodeURIComponent(cookie.substring(nameEQ.length))
    }
  }
  return null
}

export const removeCookie = (name: string): void => {
  setCookie(name, '', -1)
}
