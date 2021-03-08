/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components'

export const circle = (color, size = '8px') => css`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
`
