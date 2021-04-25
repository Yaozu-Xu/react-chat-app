import React from 'react'
import '../setUpTest'
import { shallow } from 'enzyme'
import Bubble from '../src/components/Bubble/index'
import StyledBubble, { MessageText, Time } from '../src/components/Bubble/style'

describe('Bubble Component', () => {
  const BubbleFrom = shallow(<Bubble type="from" time="昨天 下午16：30">这是一条我自己发送的聊天消息</Bubble>)
  const BubbleTo = shallow(<Bubble type="to" time="昨天 下午16：30">发给别人</Bubble>)
  it('Renders BubbleFrom correctly', () => {
    expect(BubbleFrom.find(MessageText).text()).toEqual('这是一条我自己发送的聊天消息')
    expect(BubbleFrom.find(StyledBubble).prop('type')).toEqual('from')
    expect(BubbleFrom.find(Time).text()).toEqual('昨天 下午16：30')
  })

  it('Renders BubbleTo correctly', () => {
    expect(BubbleTo.find(MessageText).text()).toEqual('发给别人')
    expect(BubbleTo.find(StyledBubble).prop('type')).toEqual('to')
    expect(BubbleTo.find(Time).text()).toEqual('昨天 下午16：30')
  })
})
