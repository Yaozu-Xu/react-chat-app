import styled, { css } from 'styled-components'
import { card, activeBar } from '@/utils/mixins'
import Text from '@/components/Text/index'
import Badge from '@/components/Badge/index'
import StyledAvatar from '@/components/Avatar/style'
import StyledParagraph from '@/components/Paragraph/style'

const Title = styled(Text)`
  grid-area: title;
`

const RightLabel = styled(Text)`
  grid-area: label;
  justify-self: end;
`

const SubTitle = styled(Text)`
  grid-area: subtitle;
`

const Description = styled.div`
  grid-area: description;
  display: grid;
  grid-template-columns: 1fr 30px;
  ${(iconSvg) => iconSvg && css`
  grid-template-columns: 24px 1fr 30px;
  `}
  align-items: center;

`

const UnreadBadge = styled(Badge)`
  justify-self: end;
`

const StyledCard = styled.div`
  ${card()};
  display: grid;
  grid-template-areas:
    "avatar title label"
    "avatar subtitle subtitle"
    "description description description";
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  background: ${({ background }) => background};
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }

  ${StyledAvatar} {
    grid-area: avatar;
  }

  ${({ active }) => active
    && css`
      background: ${({ theme }) => theme.darkPurple};
      ${Title}, ${SubTitle}, ${RightLabel}, ${StyledParagraph} {
        color: white;
      }
      ${SubTitle}, ${RightLabel} {
        opacity: 0.4;
      }
      ${activeBar({ barWidth: '4px', shadowWidth: '14px' })}
      overflow: hidden;`}
`

export default StyledCard
export {
  Title, RightLabel, SubTitle, Description, UnreadBadge,
}
