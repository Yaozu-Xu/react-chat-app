import styled, { css } from 'styled-components'
import { circle } from '@/utils/mixins'

const varients = {
  dot: css`
  padding: 5px;
  position: relative;
  &::after {
      content: "";
      ${({ theme }) => circle(theme.red, '6px')}
       display: ${({ show }) => (show ? 'block' : 'none')};
       position: absolute; 
       right: 0;
       top: 0;
  }
  `,
  default: css`
    ${({ theme }) => circle(theme.red, '26px')}
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    ${({ showZero, count }) => !showZero && count === 0 && 'visibility: hidden'}
  `,
}

const Count = styled.div`
  font-size: ${({ theme }) => theme.normal};
  color: #fff;
`

const badageWrapper = styled.div`
  display: inline-block;
  ${({ varient }) => varients[varient]}
`

export default badageWrapper
export { Count }
