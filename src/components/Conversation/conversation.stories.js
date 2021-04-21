import React from 'react'
import Bubble from '@/components/Bubble'
import VoiceMessage from '@/components/VoiceMessage'
import MessageBar from '@/components/MessageBar'
import { Default as TitleBar } from '@/components/TitleBar/titleBar.stories'
import Conversation from './index'

export default {
  title: 'Conversation',
  component: Conversation,
}

export const Default = () => (
  <Conversation titleBar={<TitleBar />} messageBar={<MessageBar />}>
    <Bubble time="昨天 下午14：26">Hi, how are you</Bubble>
    <Bubble time="昨天 下午16：30">
      I am grand but busy working recently
    </Bubble>
    <Bubble time="昨天 下午18：30">
      <VoiceMessage time="01:24" />
    </Bubble>
    <Bubble time="昨天 下午16：30">
      See you tomorrow
    </Bubble>
  </Conversation>
)
