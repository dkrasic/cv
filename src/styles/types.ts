export interface Theme {
  fontSize: {
    small: string
    medium: string
    large: string
  }
  colors: Colors
  button: {
    fontSize: {
      small: string
      medium: string
      large: string
    }
    padding: {
      small: string
      medium: string
      large: string
    }
    borderRadius: {
      small: string
      medium: string
      large: string
    }
  }
}

export interface Colors {
  [key: string]: string
}
