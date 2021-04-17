import React from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/Input'
import Filter from '@/components/Filter'
import Select from '@/components/Select'
import Option from '@/components/Option'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { ReactComponent as Plus } from '@/assets/icons/plus.svg'
import StyledFilterList from './style'

function FilterList({
  children,
  sortOptions,
  filterLabel = 'Sort',
  actionLabel,
  ...rest
}) {
  return (
    <StyledFilterList {...rest}>
      <Input.Search />
      <Filter style={{ padding: '20px 0' }}>
        {sortOptions && (
          <Filter.Filters label={filterLabel}>
            <Select>
              {sortOptions.map((_) => (
                <Option key={_.key}>{_.option}</Option>
              ))}
            </Select>
          </Filter.Filters>
        )}
        {actionLabel && (
          <Filter.Actions label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12} />
            </Button>
          </Filter.Actions>
        )}
      </Filter>
      {children}
    </StyledFilterList>
  )
}

FilterList.propTypes = {
  children: PropTypes.any,
  sortOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    option: PropTypes.string,
  })),
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
}

export default FilterList
