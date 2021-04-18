import React from 'react'
import { useSpring } from 'react-spring'
import PropTypes from 'prop-types'
import { ReactComponent as Call } from '@/assets/icons/call.svg'
import { ReactComponent as Camera } from '@/assets/icons/camera.svg'
import Avatar from '@/components/Avatar'
import Paragraph from '@/components/Paragraph'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import StyledTitleBar, { Actions, Title } from './style'

function TitleBar({
  animeProps = useSpring({
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(0px, -50px, 0px)' },
    delay: 500,
  }),
  style,
  onAvatarClick,
  onVideoClicked,
  avatarUrl,
  dropDown: DropDown,
  children,
  ...rest
}) {
  return (
    <StyledTitleBar style={{ ...style, ...animeProps }} {...rest}>
      <Avatar onClick={onAvatarClick} status="offline" src={avatarUrl} />
      {children}
      <Actions>
        <Icon opacity={0.3} icon={Call} onClick={onVideoClicked} />
        <Icon opacity={0.3} icon={Camera} />
        {DropDown}
      </Actions>
    </StyledTitleBar>
  )
}

TitleBar.Title = ({ name, title, subtitle }) => (
  <Title>
    <Paragraph size="large">{name}</Paragraph>
    <Paragraph type="secondary">
      <Text>{title}</Text>
      <Text>{` ${subtitle}`}</Text>
    </Paragraph>
  </Title>
)

TitleBar.Title.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

TitleBar.propTypes = {
  children: PropTypes.any,
  dropDown: PropTypes.any,
  onAvatarClick: PropTypes.func,
  onVideoClicked: PropTypes.func,
  animeProps: PropTypes.object,
  style: PropTypes.object,
  avatarUrl: PropTypes.string,
}

export default TitleBar
