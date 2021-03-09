import styled from 'styled-components'
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome'
import {
  activeBar,
} from '@/utils/mixins'

const StyledNavBar = styled.div`
`

const StyledMenuIcon = styled(FontAwesomeIcon)`
    font-size: 2.4rem;
    color: white;
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
  StyledMenuIcon,
  StyledMenuItem,
}
