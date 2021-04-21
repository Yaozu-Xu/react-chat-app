import React from 'react'
import face1 from '@/assets/images/face-male-1.jpg'
import { ReactComponent as Replied } from '@/assets/icons/replied.svg'
import Card from './index'

export default {
  title: 'UI/Card',
  component: Card,
}

export const Default = () => (
  <Card
    avatarUrl={face1}
    title="David"
    avatarStatus="online"
    subtitle="onlne"
    rightLabel="3 hours"
    iconSvg={Replied}
    description="A long paragraph long paragraph long paragraph"
    unreadCount={2}
  />
)

export const Active = () => (
  <Card
    avatarUrl={face1}
    title="David"
    avatarStatus="offline"
    subtitle="offline"
    rightLabel="3 hours"
    iconSvg={Replied}
    description="A long paragraph long paragraph long paragraph"
    unreadCount={2}
    active
  />
)

export const RepliedActive = () => (
  <Card
    avatarUrl={face1}
    title="David"
    avatarStatus="online"
    subtitle="online"
    rightLabel="3 hours"
    iconSvg={Replied}
    description="A long paragraph long paragraph long paragraph"
    unreadCount={2}
    active
  />
)

export const RepliedInactive = () => (
  <Card
    avatarUrl={face1}
    title="David"
    avatarStatus="online"
    subtitle="online"
    rightLabel="3 hours"
    description="xxxxxxxxx"
    unreadCount={2}
  />
)
