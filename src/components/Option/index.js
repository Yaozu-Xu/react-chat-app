import React from 'react'
import PropTypes from 'prop-types'
import StyledOption from './style'

function Option({ children, ...rest }) {
  return (
    <StyledOption {...rest}>
      {children}
    </StyledOption>
  )
}

Option.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
}

export default Option
