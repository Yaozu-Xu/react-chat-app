import styled from 'styled-components'
import Bubble from '@/components/Bubble'

const Conversations = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  flex: 1;
  & > * {
    margin: 10px 0;
  }
`

const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid #EFECE8;

  & > *:last-child {
    align-self: end;
  }
`

export default StyledConversation
export { Conversations }
