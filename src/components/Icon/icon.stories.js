import React from 'react'
import { ReactComponent as SmileIcon } from '@/assets/icons/smile.svg'
import Icon from './index'

export default {
  title: 'UI/Icon',
  component: Icon,
}

export const Default = () => <Icon icon={SmileIcon} />

export const CustomColor = () => <Icon icon={SmileIcon} color="#cccc" />

export const CustomSize = () => <Icon icon={SmileIcon} width={48} height={48} />
