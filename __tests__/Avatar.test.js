import React from 'react'
import '../setUpTest'
import { shallow } from 'enzyme'
import Avatar from '../src/components/Avatar/index'
import { AvatarClip, AvatarImage, StatusIcon } from '../src/components/Avatar/style'
import imageMocks from '../__mocks__/fileMock'

describe('Avatar Component', () => {
  const size = '48px'
  const avatarWrapper = shallow(<Avatar src={imageMocks.avatar.face1} size={size} status="online" />)
  it('Renders AvatarImage with correct size and src', () => {
    expect(avatarWrapper.find(AvatarImage).prop('src')).toEqual(imageMocks.avatar.face1)
    expect(avatarWrapper.find(AvatarClip).prop('size')).toEqual(size)
  })

  it('Renders StatusIcon correctly', () => {
    expect(avatarWrapper.find(StatusIcon).prop('status')).toEqual('online')
  })
})
