import React from 'react'
import {
  shallow,
} from 'enzyme'
import '../setUpTest'
import Card from '../src/components/Card/index'
import StyledCard from '../src/components/Card/style'

describe('Card Component', () => {
  const plainCard = shallow(<Card />)
  it('Renders Primary Button with default size and shape', () => {
    expect(plainCard.find(StyledCard).prop('background')).toEqual('#fff')
  })
})
