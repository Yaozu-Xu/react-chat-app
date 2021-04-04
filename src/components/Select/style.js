import styled from 'styled-components'

const StyledSelect = styled.select`
    border: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.grayDark};
    /* ie browser */
    ::-ms-expand{
       display: none 
    }
`

export default StyledSelect
