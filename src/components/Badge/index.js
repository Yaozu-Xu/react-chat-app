import React from 'react'
import PropTypes from 'prop-types'
import BadgeWrapper, { Count } from './style'

function Badge({
  children,
  show = false,
  count = 0,
  size = '26px',
  showZero = false,
  ...rest
}) {
  return (
    <BadgeWrapper
      varient={children ? 'dot' : 'default'}
      show={show}
      count={count}
      size={size}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </BadgeWrapper>
  )
}

Badge.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  size: PropTypes.string,

}

export default Badge
