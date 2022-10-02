import { Colors, Theme } from './types'

const COLORS: Colors = {
  darkGrey: '#393939',
  lightGrey: '#6E6E6E',
  deepOrange: '#FF5A09',
  lightOrange: '#F3843%',
  orangeYellow: '#FF9900',
}

export const MainTheme: Theme = {
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
  colors: COLORS,
  button: {
    fontSize: {
      small: '16px',
      medium: '18px',
      large: '21px',
    },
    padding: {
      small: '8px 16px',
      medium: '16px 24px',
      large: '20px 36px',
    },
    borderRadius: {
      small: '2px',
      medium: '2px',
      large: '4px',
    },
  },
}
