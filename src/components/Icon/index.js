import React from 'react'
import PropTypes from 'prop-types'
import IconWrapper from './style'

function Icon({
  icon: IconSvg,
  width = 24,
  height = 24,
  opacity,
  color,
  ...rest
}) {
  return (
    <IconWrapper color={color} opacity={opacity} {...rest}>

      {IconSvg && <IconSvg width={width} height={height} />}

    </IconWrapper>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes
    .string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes
    .string]),
  opacity: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  width: 24,
  height: 24,
}

export default Icon
