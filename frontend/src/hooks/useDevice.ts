import { BREAKPOINT_VALUES } from '../styles/breakpoints'
import { useWindowSize } from './useWindowSize'

export interface Device {
  mobile: boolean
  tablet: boolean
  desktop: boolean
}

export function useDevice(): Device {
  const { width } = useWindowSize()

  if (width === undefined) {
    return {
      mobile: false,
      tablet: false,
      desktop: false,
    }
  }

  return {
    mobile: width <= BREAKPOINT_VALUES.mobile,
    tablet: width > BREAKPOINT_VALUES.mobile && width <= BREAKPOINT_VALUES.tablet,
    desktop: width > BREAKPOINT_VALUES.tablet,
  }
}
