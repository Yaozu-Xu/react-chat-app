import React from 'react'
import avatarUrl from '@/assets/images/face-male-3.jpg'
import Profile from './index'

export default {
  title: 'Page/Profile',
  component: Profile,
}

export const Default = () => (
  <Profile>
    <Profile.Avatar status="online" avatarUrl={avatarUrl} />
    <Profile.Content name="Jack" address="Bei Jing" detail="My Profile 🔥" />
    <Profile.Contact phone="0830222222" email="Jack@gamil.com" link="https://baidu.com" />
  </Profile>
)
