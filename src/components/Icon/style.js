import styled from 'styled-components'

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg, 
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : '')};
    ${({ opacity }) => (opacity ? `opcaity: ${opacity}` : '')};
  }

`

export default IconWrapper
