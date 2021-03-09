/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import Badge from '@/components/Badge'
import StyledNavBar, { StyledMenuIcon, StyledMenuItem } from './style'

function NavBar({ children, ...rest }) {
  return (
    <StyledNavBar {...rest}>
      {children}
    </StyledNavBar>
  )
}

function MenuItem({
  icon, active = true, showBadge, ...rest
}) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <StyledMenuIcon icon={icon} />
        </Badge>
      </a>
    </StyledMenuItem>
  )
}

NavBar.propTypes = {
  children: PropTypes.element,
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  showBadge: PropTypes.bool,
}

export default NavBar
export { MenuItem }
