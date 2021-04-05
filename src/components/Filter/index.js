import React from 'react'
import PropTypes from 'prop-types'
import Text from '@/components/Text/index'
import StyledFilter, { Filters, Actions } from './style'

function Filter({ children, ...rest }) {
  return (
    <StyledFilter {...rest}>
      {children}
    </StyledFilter>
  )
}

Filter.Filters = ({ children, label, ...rest }) => (
  <Filters {...rest}>
    <Text type="secondary">
      {label}
      :
    </Text>
    {children}
  </Filters>
)

Filter.Actions = ({ children, label, ...rest }) => (
  <Actions {...rest}>
    <Text type="secondary">{label}</Text>
    {children}
  </Actions>
)

Filter.propTypes = {
  children: PropTypes.any,
}

Filter.Filters.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
}

Filter.Actions.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
}

export default Filter
