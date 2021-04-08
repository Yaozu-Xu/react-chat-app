import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@/components/Icon'
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg'
import { useTheme } from 'styled-components'
import StyledInput, { InputContainer, Prefix, Suffix } from './style'

function Input({
  placeholder = 'Please input...', prefix, suffix, ...rest
}) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  )
}

function Search({ placeholder = 'Please input...', ...rest }) {
  const theme = useTheme()
  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />
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
