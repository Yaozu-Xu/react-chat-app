import React from 'react'
import Text from './index'

export default {
  title: 'Composing/Text',
  component: Text,
}

export const Default = () => <Text>Default</Text>

export const Secondary = () => <Text type="secondary">secondary</Text>

export const Medium = () => <Text size="medium">medium size</Text>

export const LargeAndBold = () => (
  <Text size="large" bold>
    large size & bold
  </Text>
)
