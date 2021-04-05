import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import Badge from './index'

export default {
  title: 'UI/Badge',
  component: Badge,
}

export const Default = () => <Badge count={5} />

export const DotVarient = () => (
  <Badge show varient="dot">
    <FontAwesomeIcon
      icon={faCommentDots}
      style={{ fontSize: '26px' }}
    />
  </Badge>
)
