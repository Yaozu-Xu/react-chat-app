import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as BubbleTipIcon } from '@/assets/icons/bubbleTip.svg'
import StyledBubble, {
  BubbleWrapper,
  BubbleTip,
  Time,
  MessageText,
} from './style'

function Bubble({
  children, type, time, ...rest
}) {
  return (
    <StyledBubble type={type} {...rest}>
      <BubbleWrapper>
        <BubbleTip icon={BubbleTipIcon} width={40} height={28} color="white" />
        <MessageText>{children}</MessageText>
      </BubbleWrapper>
      <Time>{time}</Time>
    </StyledBubble>
  )
}

Bubble.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['from', 'to']),
  time: PropTypes.string,
}

export default Bubble
