import React from 'react'
import {
  shallow,
} from 'enzyme'
import '../setUpTest'
import Button from '../src/components/Button/index'

describe('Avatar Component', () => {
  const primaryButton = shallow(<Button />)
  const roundButton = shallow(<Button shape="round" />)
  it('Renders Primary Button with default size and shape', () => {
    expect(primaryButton.prop('size')).toEqual(30)
    expect(primaryButton.prop('shape')).toEqual('rect')
  })

  it('Renders Round Button correctly', () => {
    expect(roundButton.prop('shape')).toEqual('round')
  })
})
