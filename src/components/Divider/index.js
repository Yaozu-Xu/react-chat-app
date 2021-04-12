import React from 'react'
import PropTypes from 'prop-types'
import StyledDivider from './style'

function Divider({
  children,
  color = 'rgba(24, 28, 47, 0.3)',
  height = 1,
  ...rest
}) {
  return (
    <StyledDivider {...rest} color={color} height={height}>
      {children}
    </StyledDivider>
  )
}

Divider.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  height: PropTypes.number,
}

export default Divider
