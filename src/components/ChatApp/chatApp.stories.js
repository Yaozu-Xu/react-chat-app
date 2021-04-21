import React from 'react'
import { Menu as NavBar } from '@/components/Navbar/navbar.stories'
import { Default as MessageList } from '@/components/MessageList/messageList.stories'
import { Default as Conversation } from '@/components/Conversation/conversation.stories'
import { Default as Profile } from '@/components/Profile/profile.stories'
import ChatApp from './index'

export default {
  title: 'ChatApp',
  component: ChatApp,
}

export const Default = () => (
  <ChatApp
    navBar={NavBar}
    sideBar={MessageList}
    content={Conversation}
    profile={Profile}
    shown
  />
)
