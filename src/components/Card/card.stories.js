import React from 'react'
import face1 from '@/assets/images/face-male-1.jpg'
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
    description="A long paragraph long paragraph long paragraph"
    unreadCount={2}
    active
  />
)

export const Replied = () => (
  <Card
    avatarUrl={face1}
    title="David"
    avatarStatus="online"
    subtitle="online"
    rightLabel="3 hours"
    description="A long paragraph long paragraph long paragraph"
    unreadCount={2}
    active
  />
)

export const RepliedInactive = () => (
  <Card
    avatarUrl={face1}
    title="李铭浩"
    avatarStatus="online"
    subtitle="在线"
    rightLabel="3 小时之前"
    description="即使爬到最高的山上，一次也只能脚踏实地地"
    unreadCount={2}
    replied
  />
)
