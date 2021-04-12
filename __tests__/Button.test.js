import React from 'react'
import {
  shallow,
} from 'enzyme'
import '../setUpTest'
import Button from '../src/components/Button/index'
import StyledButton from '../src/components/Button/style'

describe('Avatar Component', () => {
  const primaryButton = shallow(<Button />)
  const roundButton = shallow(<Button shape="round" />)

  it('Renders Primary Button with default size and shape', () => {
    expect(primaryButton.find(StyledButton).prop('size')).toEqual(30)
    expect(primaryButton.find(StyledButton).prop('shape')).toEqual('rect')
  })

  it('Renders Round Button correctly', () => {
    expect(roundButton.find(StyledButton).prop('shape')).toEqual('round')
  })
})
