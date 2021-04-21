import styled from 'styled-components'

const Nav = styled.nav`
  flex-shrink: 0;

  position: relative;
  z-index: 100;
`

const Sidebar = styled.aside`
  max-width: 448px;
  min-width: 344px;
  height: 100vh;
  flex: 1;
  background: ${({ theme }) => theme.grediantGray};

  position: relative;
  z-index: 50;
  > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
  }
`

const Content = styled.main`
  flex: 2;
  position: relative;
`

const StyledChatApp = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

export default StyledChatApp
export {
  Nav, Sidebar, Content,
}
