import React from 'react'
import Paragraph from '@/components/Paragraph'
import Divider from '@/components/Divider'
import { ReactComponent as Options } from '@/assets/icons/options.svg'
import Icon from '@/components/Icon'
import { DropdownItem } from './style'
import Dropdown from './index'

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
}

const dropdownContent = (
  <>
    <DropdownItem>
      <Paragraph>个人资料</Paragraph>
    </DropdownItem>
    <DropdownItem>
      <Paragraph>关闭会话</Paragraph>
    </DropdownItem>
    <Divider />
    <DropdownItem>
      <Paragraph type="danger">屏蔽此人</Paragraph>
    </DropdownItem>
  </>
)

export const Default = () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}
  >
    <Paragraph>点击右侧按钮</Paragraph>
    <Dropdown content={dropdownContent}>
      <Icon opacity={0.3} icon={Options} />
    </Dropdown>
  </div>
)

export const Left = () => (
  <div>
    <Paragraph>点击下方按钮</Paragraph>
    <Dropdown align="left" content={dropdownContent}>
      <Icon opacity={0.3} icon={Options} />
    </Dropdown>
  </div>
)
