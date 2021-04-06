import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

Badge.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  size: PropTypes.string,
}

export default Badge
