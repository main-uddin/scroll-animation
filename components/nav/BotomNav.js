import styled from 'styled-components'

const BottomNav = () => {
  return (
    <BottomNavWrapper>
      <BottomNavContent>
        <img
          src='/subbrand.png'
          alt=''
          style={{ width: '200px', height: '20px', marginBottom: '10px' }}
        />
        <BottomNavTextWrapper>
          <div>Overview</div>
          <div>Tech Specs</div>
          <div>Picture Gallery</div>
          <BuyBtn>Buy Now</BuyBtn>
        </BottomNavTextWrapper>
      </BottomNavContent>
    </BottomNavWrapper>
  )
}

export default BottomNav

const BottomNavWrapper = styled.div`
  background: #111e18;
  width: 100%;
  height: 70px;
  color: #fff;
  display: flex;
  justify-content: center;
`

const BottomNavContent = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const BottomNavTextWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`
const BuyBtn = styled.div`
  padding: 5px 5px;
  background: #303dd3;
  font-weight: bold;
`
