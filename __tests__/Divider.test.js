import React from 'react'
import '../setUpTest'
import { shallow } from 'enzyme'
import Divider from '../src/components/Divider/index'
import StyledDivider from '../src/components/Divider/style'

describe('Divider Component', () => {
  const ShallowedDivider = shallow(<Divider height={5} color="gray" />)
  it('Renders Divider correctly', () => {
    expect(ShallowedDivider.find(StyledDivider).prop('height')).toEqual(5)
    expect(ShallowedDivider.find(StyledDivider).prop('color')).toEqual('gray')
  })
})
