import styled from 'styled-components'
import BottomNav from './BotomNav'
import TopNav from './TopNav'

const Index = () => {
  return (
    <NavWrapper>
      <TopNav />
      <BottomNav />
    </NavWrapper>
  )
}

export default Index

export const NavWrapper = styled.div`
  width: 100vw;
  height: 120px;
  position: fixed;
  z-index: 1000;
`
