import styled from 'styled-components'

const TopNav = () => {
  return (
    <TopNavWrapper>
      <TopNavContent>
        <img src='/logo.png' alt='' style={{ width: '20px' }} />
        <div>Laptop</div>
        <div>Desktop</div>
        <div>All In One</div>
        <div>Monitor</div>
        <div>Keyboard</div>
        <div>Mouse</div>
        <div>Pendrive</div>
        <div>Headphone</div>
        <div>Accessories</div>
      </TopNavContent>
    </TopNavWrapper>
  )
}
export default TopNav

const TopNavWrapper = styled.div`
  background: #000;
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopNavContent = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
