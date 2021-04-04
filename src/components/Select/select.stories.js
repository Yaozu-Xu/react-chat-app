import React from 'react'
import Select from './index'
import Option from '../Option/index'

export default {
  title: 'UI/Input/Select',
  component: Select,
}

export const Default = () => (
  <Select>
    <Option>option-1</Option>
    <Option>option-2</Option>
  </Select>
)
