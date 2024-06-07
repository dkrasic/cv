import { Colors, Theme } from './types'

const COLORS: Colors = {
  darkGrey: '#393939',
  lightGrey: '#6E6E6E',
  deepOrange: '#FF5A09',
  lightOrange: '#F38435',
  orangeYellow: '#FF9900',
  salmon: 'salmon',
}

export const MainTheme: Theme = {
  fontSize: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
  },
  colors: COLORS,
  usedColors: {
    contentBackground: COLORS.darkGrey,
  },
  button: {
    fontSize: {
      small: '0.75rem',
      medium: '1rem',
      large: '1.5rem',
    },
    padding: {
      small: '0.5rem 1rem',
      medium: '1rem 1.5rem',
      large: '1.25rem 2rem',
    },
    borderRadius: {
      small: '2px',
      medium: '2px',
      large: '4px',
    },
  },
}
