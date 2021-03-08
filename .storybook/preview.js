import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import '@/stories/global.css'

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

addParameters({
  options: {
    showRoots: true
  }
})