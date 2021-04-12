import styled from 'styled-components'

const StyledDivider = styled.div`
  width: 100%;
  border-bottom: ${({ height }) => `${height}px`} solid ${({ color }) => color};
`

export default StyledDivider
