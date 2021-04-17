import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
} from 'styled-components'
import theme from '@/theme'
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
  subLabel: SubLabel,
  description,
  count,
  active,
  iconSvg,
  ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledCard active={active} {...rest} background={background}>
        <Avatar status={avatarStatus} src={avatarUrl} />
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        {SubLabel && <SubLabel style={{ 'grid-area': 'sublabel' }} />}
        <RightLabel>{rightLabel}</RightLabel>
        <Description iconSvg={iconSvg}>
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
    </ThemeProvider>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
  avatarUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rightLabel: PropTypes.string,
  subLabel: PropTypes.element,
  description: PropTypes.string,
  count: PropTypes.number,
  avatarStatus: PropTypes.any,
  active: PropTypes.bool,
  iconSvg: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

export default Card
