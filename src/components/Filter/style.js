import styled from 'styled-components'
import StyledText from '@/components/Text/style'

const StyledFilter = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
`
const Filters = styled.div``

const Actions = styled.div`
    justify-content: end;
    ${StyledText} {
        padding-right: 1rem;
    }
`

export default StyledFilter

export { Filters, Actions }
