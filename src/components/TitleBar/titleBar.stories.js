import React from 'react'
import { DropdownItem } from '@/components/DropDown/style'
import { ReactComponent as Options } from '@/assets/icons/options.svg'
import face from '@/assets/images/face-male-3.jpg'
import Icon from '@/components/Icon'
import Paragraph from '@/components/Paragraph'
import Dropdown from '@/components/DropDown'
import Divider from '@/components/Divider'
import TitleBar from './index'

export default {
  title: 'Page/TitleBar',
  component: TitleBar,
}

export const Default = () => (
  <TitleBar
    avatarUrl={face}
    dropDown={(
      <Dropdown
        content={(
          <>
            <DropdownItem>
              <Paragraph>Profile</Paragraph>
            </DropdownItem>
            <DropdownItem>
              <Paragraph>Close</Paragraph>
            </DropdownItem>
            <Divider />
          </>
          )}
      >
        <Icon opacity={0.3} icon={Options} />
      </Dropdown>
)}
  >
    <TitleBar.Title name="Jack" title="offline" subtitle="3 days ago" />
  </TitleBar>
)
