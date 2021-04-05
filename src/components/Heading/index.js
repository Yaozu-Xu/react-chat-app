import React from 'react'
import PropTypes from 'prop-types'
import StyledHeading from './style'

function Heading({ children, level, ...rest }) {
  return (
    <StyledHeading as={`h${level}`} {...rest}>
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

export default Heading
