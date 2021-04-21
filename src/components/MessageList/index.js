import React from 'react'
import PropTypes from 'prop-types'
import FilterList from '@/components/FilterList'
import StyledMessageList, { ChatList } from './style'

function MessageList({
  children,
  ...rest
}) {
  return (
    <StyledMessageList {...rest}>
      <FilterList>
        <ChatList>
          {children}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  )
}

MessageList.propTypes = {
  children: PropTypes.any,
}

export default MessageList
