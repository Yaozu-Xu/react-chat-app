import React from 'react'
import Paragraph from './index'

export default {
  title: 'Composing/Paragraph',
  component: Paragraph,
}

export const Default = () => (
  <>
    <Paragraph>这是一个段落</Paragraph>
    <Paragraph>这是一个段落</Paragraph>
  </>
)

export const Ellipsis = () => (
  <Paragraph ellipsis>
    这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个
    很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落
  </Paragraph>
)
