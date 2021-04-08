import styled from 'styled-components'

const StyledPopover = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    background-color: ${({ theme }) => theme.background};
    border-radius: 21px;
    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
    padding: 12px 30px;
    position: absolute;
    bottom: calc(100% + 16px);
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    ${({ offset }) => offset && `transform: translate(${offset.x || 0}, ${offset.y || 0})`};
`

const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: ${({ theme }) => theme.background} transparent transparent
    transparent;
    left: calc(50% - 6px);
    bottom: calc(100% + 12px - 5px);
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    ${({ offset }) => offset && `transform: translateY(${offset.y || 0});`}
`

const Target = styled.div``

export default StyledPopover

export {
  Content,
  Triangle,
  Target,
}
