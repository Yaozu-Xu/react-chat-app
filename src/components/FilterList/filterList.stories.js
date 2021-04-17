import React from 'react'
import FilterList from './index'

export default {
  title: 'Page/FilterList',
  component: FilterList,
}

const options = [{ option: 'date', key: 'key1' }]

export const Default = () => <FilterList sortOptions={options} actionLabel="New Session">此处添加 children list</FilterList>
