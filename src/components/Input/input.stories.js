import React from 'react'
import Icon from '@/components/Icon'
import { ReactComponent as ClipIcon } from '@/assets/icons/clip.svg'
import { ReactComponent as SmileIcon } from '@/assets/icons/smile.svg'
import Input from './index'

export default {
  title: 'UI/Input',
  component: Input,
}

export const Default = () => <Input />

export const Search = () => <Input.Search />

export const WithAffix = () => (
  <Input
    prefix={<Icon icon={ClipIcon} color="#cccccc" />}
    suffix={<Icon icon={SmileIcon} color="#cccccc" />}
  />
)
