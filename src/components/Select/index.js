import React from 'react'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
} from 'styled-components'
import theme from '@/theme'
import StyledSelect from './style'

function Select({ children, ...rest }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledSelect {...rest}>
        {children}
      </StyledSelect>
    </ThemeProvider>
  )
}

Select.propTypes = {
  children: PropTypes.any,
}

export default Select
