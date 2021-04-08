import React from 'react'
import Button from '@/components/Button'
import Popover from './index'

export default {
  title: 'UI/Popover',
  component: Popover,
}

export const Default = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    }}
  >
    <Popover content="Hello!">
      <Button shape="rect">Click Me</Button>
    </Popover>
  </div>
)

export const WithOffset = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
    }}
  >
    <Popover offset={{ x: '-25%' }} content="Hello!">
      <Button shape="rect">Click Me</Button>
    </Popover>
  </div>
)
