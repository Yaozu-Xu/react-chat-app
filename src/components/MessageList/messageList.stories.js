/* eslint-disable react/no-array-index-key */
import React from 'react'
import face1 from '@/assets/images/face-male-1.jpg'
import { ReactComponent as Replied } from '@/assets/icons/replied.svg'
import Card from '@/components/Card/index'
import MessageList from './index'

export default {
  title: 'Page/MessageList',
  component: MessageList,
}

export const Default = () => (
  <MessageList>
    {[0, 1, 2, 3, 4].map((_, key) => (
      <Card
        key={`${key}random`}
        avatarUrl={face1}
        iconSvg={Replied}
        title="David"
        avatarStatus="online"
        subtitle="onlne"
        rightLabel="3 hours"
        description="A long paragraph long paragraph long paragraph"
        active
      />
    ))}
  </MessageList>
)
