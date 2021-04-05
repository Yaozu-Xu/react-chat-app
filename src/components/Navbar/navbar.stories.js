import React from 'react'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import NavBar, { MenuItem } from './index'
import 'styled-components/macro'

export default {
  title: 'Page/NavBar',
  component: NavBar,
}

export const Default = () => <NavBar>default</NavBar>

export const Menu = () => (
  <div css={`
  background-color: ${({ theme }) => theme.darkPurple};
   width: 100px;`}
  >
    <MenuItem showBadge active icon={faCommentDots} />
  </div>
)
