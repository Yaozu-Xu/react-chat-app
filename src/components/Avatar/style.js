import styled, {
  css,
} from 'styled-components'
import { circle } from '@/utils/mixins'

const circleMixin = (color, size = '8px') => css`
  content: "";
  display: block;
  position: absolute;
  ${circle(color, size)}
`

const AvatarWrapper = styled.div`
  position: relative;
`
const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${circleMixin('white')};
    transform: scale(2)
  }

  &::after {
    ${({ theme, status, size }) => {
    if (status === 'online') {
      return circleMixin(theme.green, size)
    }
    return circleMixin(theme.gray, size)
  }}
  }
`

const AvatarClip = styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    overflow: hidden;
`

const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-position: center
`

export default AvatarWrapper

export {
  StatusIcon,
  AvatarClip,
  AvatarImage,
}
