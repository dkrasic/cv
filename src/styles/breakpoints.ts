import { BreakpointValues, Devices } from './types'

export const BREAKPOINT_VALUES: BreakpointValues = {
  mobile: 425,
  tablet: 768,
}

export const DEVICE: Devices = {
  mobile: `(max-width: ${BREAKPOINT_VALUES.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINT_VALUES.tablet}px)`,
}
