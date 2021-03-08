import React from 'react'
import '../setUpTest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { shallow } from 'enzyme'
import { ReactComponent as SmileIcon } from '../src/assets/icons/smile.svg'
import Icon from '../src/components/Icon/index'
import IconWrapper from '../src/components/Icon/style'

describe('Avatar Component', () => {
  it('Renders customized icon correctly', () => {
    const shallowIcon = shallow(<Icon icon={SmileIcon} color="#cccc" />)
    expect(shallowIcon.find(IconWrapper).prop('color')).toEqual('#cccc')
    expect(shallowIcon.find(IconWrapper).prop('icon')).toEqual(SmileIcon)
  })

  it('Renders fontAwesome icon coorectly', () => {
    const shallowfontAwesomeIcon = shallow(<FontAwesomeIcon
      icon={faCommentDots}
      style={{ color: '#cccc', fontSize: '24px' }}
    />)
    expect(shallowfontAwesomeIcon.prop('data-icon')).toEqual('comment-dots')
  })
})
