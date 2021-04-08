import styled from 'styled-components'
import {
  activeBar,
} from '@/utils/mixins'

const StyledNavBar = styled.div`
`

const StyledMenuItem = styled.div`
    & > a {
        width: 100%;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${activeBar()}
    }
`

export default StyledNavBar
export {
  StyledMenuItem,
}
