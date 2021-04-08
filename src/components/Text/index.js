import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
} from 'styled-components'
import theme from '@/theme'
import StyledText from './style'

function Text({
  children, type = 'primary', size = 'normal', bold, ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <StyledText type={type} size={size} bold={bold} {...rest}>
        {children}
      </StyledText>
    </ThemeProvider>

  )
}

Text.propTypes = {
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
