import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './style'

function Button({
  children,
  type = 'primary',
  shape = 'rect',
  size = 30,
  color,
  ...rest
}) {
  return (
    <StyledButton {...rest} type={type} shape={shape} size={size} color={color}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'danger', 'success']),
  shape: PropTypes.oneOf(['rect', 'danger', 'success']),
  color: PropTypes.string,
  size: PropTypes.number,
}

export default Button
