import React from 'react'
import Bubble from '@/components/Bubble'
import VoiceMessage from '@/components/VoiceMessage'
import { Default as TitleBar } from '@/components/TitleBar/titleBar.stories'
import Conversation from './index'
import { MyBubble } from './style'

export default {
  title: 'Conversation',
  component: Conversation,
}

export const Default = () => (
  <Conversation titleBar={<TitleBar />}>
    <Bubble time="昨天 下午14：26">Hi, how are you</Bubble>
    <MyBubble time="昨天 下午16：30">
      I am grand but busy working recently
    </MyBubble>
    <Bubble time="昨天 下午18：30">
      <VoiceMessage time="01:24" />
    </Bubble>
    <MyBubble time="昨天 下午16：30">
      See you tomorrow
    </MyBubble>
  </Conversation>
)
