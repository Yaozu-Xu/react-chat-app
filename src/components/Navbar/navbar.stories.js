import React from 'react'
import { ReactComponent as Replied } from '@/assets/icons/replied.svg'
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
    <MenuItem showBadge active icon={Replied} />
  </div>
)
