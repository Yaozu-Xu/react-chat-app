import React from 'react'
import { ReactComponent as SmileIcon } from '@/assets/icons/smile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Icon from './index'

export default {
  title: 'UI/Icon',
  component: Icon,
}

export const Default = () => <Icon icon={SmileIcon} />

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccc" />

export const CustomSize = () => <Icon icon={SmileIcon} width={48} height={48} />

export const FontAwesome = () => <FontAwesomeIcon icon={faCommentDots} />

export const FontAwesomeColor = () => (
  <div>
    <FontAwesomeIcon
      icon={faCommentDots}
      style={{ color: '#cccc', fontSize: '24px' }}
    />
    <FontAwesomeIcon
      icon={faCommentDots}
      style={{ color: 'orange', fontSize: '24px' }}
    />
    <FontAwesomeIcon
      icon={faCommentDots}
      style={{ color: 'green', fontSize: '24px' }}
    />
  </div>

)

export const FontAwesomeSize = () => (
  <div>
    <FontAwesomeIcon
      icon={faCommentDots}
      style={{ fontSize: '20px' }}
    />
    <FontAwesomeIcon
      icon={faCommentDots}
      style={{ fontSize: '24px' }}
    />
    <FontAwesomeIcon
      icon={faCommentDots}
      style={{ fontSize: '28px' }}
    />
  </div>

)
