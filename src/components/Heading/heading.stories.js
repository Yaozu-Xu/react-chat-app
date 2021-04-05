import React from 'react'
import Heading from './index'

export default {
  title: 'Composing/Heading',
  component: Heading,
}

export const H1 = () => <Heading level={1}>heading</Heading>
export const H2 = () => <Heading level={2}>heading</Heading>
export const H3 = () => <Heading level={3}>heading</Heading>
export const H4 = () => <Heading level={4}>heading</Heading>
export const H5 = () => <Heading level={5}>heading</Heading>
export const H6 = () => <Heading level={6}>heading</Heading>
