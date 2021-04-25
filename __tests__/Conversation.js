import React from 'react'
import '../setUpTest'
import { shallow } from 'enzyme'
import Bubble from '../src/components/Bubble/index'
import Conversation from '../src/components/Conversation/index'
import { Conversations } from '../src/components/Conversation/style'

describe('Conversation Component', () => {
  const ShallowedConversation = shallow(
    <Conversation>
      <Bubble time="昨天 下午14：26">Hi, how are you</Bubble>
      <Bubble time="昨天 下午16：30">
        I am grand but busy working recently
      </Bubble>
      <Bubble time="昨天 下午16：30">
        See you tomorrow
      </Bubble>
    </Conversation>,
  )
  it('Renders Conversation with correct number of Bubbles', () => {
    expect(ShallowedConversation.find(Conversations).children().length).toEqual(3)
  })
})
