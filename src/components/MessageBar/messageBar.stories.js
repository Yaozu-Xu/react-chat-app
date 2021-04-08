import React from 'react'
import { ReactComponent as OptionsIcon } from '@/assets/icons/options.svg'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { ReactComponent as PlaneIcon } from '@/assets/icons/plane.svg'
import MessageBar from './index'

export default {
  title: 'Page/MessageBar',
  component: MessageBar,
}

function PopoverContent() {
  return (
    <div>
      <span label="smile">😊</span>
      <span label="grinning">😆</span>
      <span label="thumbup">👍</span>
      <span label="indexfingerup">☝️</span>
      <span label="ok">👌</span>
      <span label="handsputtogether">🙏</span>
      <span label="smilewithsunglasses">😎</span>
      <span label="flexedbicep">💪</span>
      <Icon icon={OptionsIcon} style={{ marginLeft: '24px' }} />
    </div>
  )
}
function MessageButton() {
  return (
    <Button size={52}>
      <Icon
        icon={PlaneIcon}
        color="white"
        style={{ transform: 'translateX(-2px)' }}
      />
    </Button>
  )
}

export const Default = () => (
  <div style={{ marginTop: 80 }}>
    <MessageBar popoverContent={PopoverContent} button={MessageButton} />
  </div>
)
