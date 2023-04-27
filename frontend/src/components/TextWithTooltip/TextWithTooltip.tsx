import { FC, useState } from 'react'
import styled from 'styled-components'

// ** Props **
interface TextWithTooltipProps {
  text: string
  tooltipText: string
  tooltipPosition?: 'left' | 'right'
}

interface TooltipWrapperProps extends Pick<TextWithTooltipProps, 'tooltipPosition'> {
  isTooltipVisible: boolean
}

// ** Styles **
const TextWithTooltipWrapper = styled.div`
  position: relative;
  width: fit-content;
  --line-height: 1.5rem;
`

const Text = styled.span`
  line-height: var(--line-height);
  color: ${props => props.theme.colors.orangeYellow};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const TooltipWrapper = styled.div<TooltipWrapperProps>`
  position: absolute;
  display: flex;
  align-items: center;
  width: ${props => (props.isTooltipVisible ? '200px' : '0px')};
  transition: width 0.5s;
  overflow: hidden;
  ${({ tooltipPosition }) =>
    tooltipPosition === 'right'
      ? ` left: 100%;
          transform: translateY(calc(-50% - var(--line-height) / 2));`
      : ` right: 100%;
          transform: translateY(calc(-50% - var(--line-height) / 2));`};
`

const Entrance = styled.div<Pick<TextWithTooltipProps, 'tooltipPosition'>>`
  --size: 10px;
  height: var(--size);
  min-width: var(--size);
  background-color: ${props => props.theme.usedColors.contentBackground};
  border: ${props => `1px solid ${props.theme.colors.orangeYellow}`};
  transform: rotate(45deg);

  ${({ tooltipPosition }) =>
    tooltipPosition === 'right'
      ? ` margin-right: calc(var(--size) / -2);
          margin-left: 10px;
          border-right: none;
          border-top: none;
          border-bottom-left-radius: 3px;`
      : ` margin-left: calc(var(--size) / -2);
          margin-right: 10px;
          border-left: none;
          border-bottom: none;
          border-top-right-radius: 3px;`}
`

const TooltipTextWrapper = styled.div<Pick<TextWithTooltipProps, 'tooltipPosition'>>`
  --border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-color: ${props => props.theme.colors.orangeYellow};
  height: 120px;
  background-color: ${props => props.theme.usedColors.contentBackground};
  color: ${props => props.theme.colors.orangeYellow};
  text-align: center;

  ${({ tooltipPosition }) =>
    tooltipPosition === 'right'
      ? ` padding-right: 0;
          border-left: 1px solid;
          border-top-left-radius: var(--border-radius);
          border-bottom-left-radius: var(--border-radius);`
      : ` padding-left: 0;
          border-right: 1px solid;
          border-top-right-radius: var(--border-radius);
          border-bottom-right-radius: var(--border-radius);`}
`

// ** Components **
export const TextWithTooltip: FC<TextWithTooltipProps> = ({
  text,
  tooltipText,
  tooltipPosition = 'right',
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  return (
    <TextWithTooltipWrapper>
      <Text onClick={() => setIsTooltipVisible(!isTooltipVisible)}>{text}</Text>
      <TooltipWrapper tooltipPosition={tooltipPosition} isTooltipVisible={isTooltipVisible}>
        {tooltipPosition === 'right' && <Entrance tooltipPosition={tooltipPosition} />}
        <TooltipTextWrapper tooltipPosition={tooltipPosition}>{tooltipText}</TooltipTextWrapper>
        {tooltipPosition === 'left' && <Entrance tooltipPosition={tooltipPosition} />}
      </TooltipWrapper>
    </TextWithTooltipWrapper>
  )
}
