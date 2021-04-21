import styled, { css } from 'styled-components'
import Paragraph from '@/components/Paragraph'
import Icon from '@/components/Icon'
import Text from '@/components/Text'

const Time = styled(Paragraph).attrs({ type: 'secondary', size: 'small' })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`

const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5;
`

const BubbleWrapper = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`

const MessageText = styled(Text)``

const typeVariants = {
  from: css`
    align-self: flex-end;
    ${BubbleWrapper} {
      background-color: ${({ theme }) => theme.primaryColor};
    }
    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;
      /* svg color */
      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }
    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }
    ${MessageText} {
      color: white;
    }
  `,
}

const StyledBubble = styled.div`
  display: flex;
  flex-direction: column;
  ${({ type }) => type && typeVariants[type]}
`

export default StyledBubble
export {
  BubbleWrapper, BubbleTip, Time, MessageText,
}
