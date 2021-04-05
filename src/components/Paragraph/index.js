import React from 'react'
import PropTypes from 'prop-types'
import StyledParagraph from './style'

function Paragraph({
  children, ellipsis, ...rest
}) {
  return (
    <StyledParagraph as="p" ellipsis {...rest}>
      {children}
    </StyledParagraph>
  )
}

Paragraph.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  ellipsis: PropTypes.bool,
}

export default Paragraph
