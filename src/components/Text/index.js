import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './style'

function Text({
  children, type = 'primary', size = 'normal', bold, ...rest
}) {
  return (
    <StyledText type={type} size={size} bold={bold} {...rest}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf([
    'xxsmall',
    'xsmall',
    'small',
    'normal',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  bold: PropTypes.bool,
}

export default Text
