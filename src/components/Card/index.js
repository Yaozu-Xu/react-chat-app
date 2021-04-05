import React from 'react'
import PropTypes from 'prop-types'
import {
  useTheme,
} from 'styled-components'
import Avatar from '@/components/Avatar'
import Paragraph from '@/components/Paragraph'
import Icon from '@/components/Icon'
import StyledCard, {
  SubTitle,
  Title,
  RightLabel,
  Description,
  UnreadBadge,
} from './style'

function Card({
  children,
  background = '#fff',
  avatarUrl,
  avatarStatus,
  title,
  subtitle,
  rightLabel,
  description,
  count,
  active,
  iconSvg,
  ...rest
}) {
  const theme = useTheme()
  return (
    <StyledCard active={active} {...rest} background={background}>
      <Avatar status={avatarStatus} src={avatarUrl} />
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <RightLabel>{rightLabel}</RightLabel>
      <Description>
        {iconSvg && (
        <Icon
          width={16}
          height={14}
          icon={iconSvg}
          color={active ? theme.inactiveColorDark : theme.inactiveColor}
          opacity={active ? 0.4 : 1}
          style={{
            justifyContent: 'start',
          }}
        />
        )}
        <Paragraph>{description}</Paragraph>
        <UnreadBadge count={count} />
      </Description>
    </StyledCard>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
  avatarUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rightLabel: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.number,
  avatarStatus: PropTypes.any,
  active: PropTypes.bool,
  iconSvg: PropTypes.any,
}

export default Card
