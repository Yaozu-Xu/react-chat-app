import React from 'react'
import PropTypes from 'prop-types'
// import TitleBar from '@/components/TitleBar'
import MessageBar from '@/components/MessageBar'
import StyledConversation, { Conversations } from './style'

function Conversation({ children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      {/* <TitleBar /> */}
      <Conversations>
        {children}
      </Conversations>
      <MessageBar />
    </StyledConversation>
  )
}

Conversation.propTypes = {
  children: PropTypes.any,
}

export default Conversation
