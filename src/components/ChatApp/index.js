import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import StyledChatApp, {
  Nav, Sidebar, Content,
} from './style'

function ChatApp({
  children,
  navBar: NavBar,
  sideBar: MessageList,
  content: Conversation,
  profile: Profile,
  showProfile = true,
  ...rest
}) {
  const animeProps = showProfile ? useSpring({
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(-100px, 0px, 0px)' },
    delay: 500,
  }) : { width: 0 }

  return (
    <StyledChatApp {...rest}>
      <Nav>
        {NavBar && <NavBar />}
      </Nav>
      <Sidebar>
        {MessageList && <MessageList />}
      </Sidebar>
      <Content>
        {Conversation && <Conversation />}
      </Content>
      <animated.div style={{ ...animeProps }}>
        {Profile && <Profile />}
      </animated.div>
    </StyledChatApp>
  )
}

ChatApp.propTypes = {
  children: PropTypes.any,
  navBar: PropTypes.any,
  sideBar: PropTypes.any,
  content: PropTypes.any,
  profile: PropTypes.any,
  showProfile: PropTypes.bool,
}

export default ChatApp
