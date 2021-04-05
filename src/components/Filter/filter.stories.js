import React from 'react'
import Select from '@/components/Select/index'
import Option from '@/components/Option/index'
import Button from '@/components/Button/index'
import Icon from '@/components/Icon/index'
import { ReactComponent as Plus } from '@/assets/icons/plus.svg'
import Filter from './index'

export default {
  title: 'UI/Filter',
  component: Filter,
}

export const Default = () => (
  <Filter>
    <Filter.Filters label="List Rank">
      <Select>
        <Option>Messages</Option>
        <Option>Friends</Option>
      </Select>
    </Filter.Filters>
    <Filter.Actions label="New Session">
      <Button>
        <Icon icon={Plus} width={12} height={12} />
      </Button>
    </Filter.Actions>
  </Filter>
)
