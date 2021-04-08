import React from 'react'
import Bubble from './index'

export default {
  title: 'UI/Bubble',
  component: Bubble,
  decorators: [(storyFn) => <div style={{ padding: '24px' }}>{storyFn()}</div>],
}

export const FromOthers = () => (
  <Bubble time="昨天 下午14：26">这是一条其它人发送的聊天消息</Bubble>
)

export const Mine = () => (
  <Bubble type="from" time="昨天 下午16：30">
    这是一条我自己发送的聊天消息
  </Bubble>
)
