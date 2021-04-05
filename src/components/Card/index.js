import React from 'react'
import PropTypes from 'prop-types'
import {
  useTheme,
} from 'styled-components'
import Avatar from '@/components/Avatar/index'
import Paragraph from '@/components/Paragraph/index'
import Icon from '@/components/Icon/index'
import { ReactComponent as Replied } from '@/assets/icons/replied.svg'
import StyledCard, {
  SubTitle,
  Title,
  RightLabel,
  Description,
  UnreadBadge,
} from './style'

function Card({
  children,
  avatarUrl,
  avatarStatus,
  title,
  subtitle,
  rightLabel,
  description,
  count,
  active,
  iconSvg = Replied,
  ...rest
}) {
  const theme = useTheme()
  return (
    <StyledCard active={active} {...rest}>
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
