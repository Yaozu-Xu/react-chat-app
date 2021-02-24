import React from 'react'
import '@/stories/global.css'
import avatar1 from '@/assets/images/face-male-1.jpg'
import avatar2 from '@/assets/images/face-male-2.jpg'
import avatar3 from '@/assets/images/face-male-3.jpg'
import avatar4 from '@/assets/images/face-male-4.jpg'
import Avatar from '.'

export default {
  title: 'Avatar',
  component: Avatar,
}

export const Default = () => <Avatar src={avatar1} size="48px" />

export const Sizes = () => (
  <div className="row-elements">
    <Avatar src={avatar1} size="48px" />
    <Avatar src={avatar2} size="56px" />
    <Avatar src={avatar3} size="64px" />
    <Avatar src={avatar4} size="72px" />
  </div>
)

export const Status = () => (
  <div className="row-elements">
    <Avatar src={avatar1} status="offline" />
    <Avatar src={avatar2} status="online" />
    <Avatar src={avatar3} status="online" size="72px" />
    <Avatar src={avatar4} status="offline" size="72px" statusIcon="12px" />
  </div>
)
