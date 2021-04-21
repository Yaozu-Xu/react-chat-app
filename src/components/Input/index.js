import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@/components/Icon'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import StyledInput, { InputContainer, Prefix, Suffix } from './style'

function Input({
  placeholder = 'Please input...', prefix, suffix, ...rest
}) {
  return (
    <ThemeProvider theme={theme}>
      <InputContainer {...rest}>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput placeholder={placeholder} />
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
    </ThemeProvider>
  )
}

function Search({ placeholder = 'Please input...', ...rest }) {
  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color="rgba(24, 28, 47, 0.3)" width={18} height={18} />
      }
      {...rest}
    />
  )
}

Input.Search = Search

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
}

Search.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
}
export default Input
