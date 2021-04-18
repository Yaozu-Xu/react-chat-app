import React from 'react'
import PropTypes from 'prop-types'
import MessageBar from '@/components/MessageBar'
import { useSpring } from 'react-spring'
import StyledConversation, { Conversations } from './style'

function Conversation({
  titleBar, children, ...rest
}) {
  const convsAnimeProps = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: 'translate3d(50px, 0px, 0px)' },
    delay: 800,
  })

  return (
    <StyledConversation {...rest}>
      {titleBar}
      <Conversations style={convsAnimeProps}>
        {children}
      </Conversations>
      <MessageBar />
    </StyledConversation>
  )
}

Conversation.propTypes = {
  children: PropTypes.any,
  titleBar: PropTypes.any,
}

export default Conversation
