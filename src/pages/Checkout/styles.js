import styled from 'styled-components'

export const StyledProfile = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 10px;

  .checkout {
    font-size: 30px;
    font-weight: normal;
  }

  .hr-checkout {
    background-color: #546a76;
  }

  p {
    font-size: 15px;
  }

  hr {
    height: 1px;
    border: none;
    background-color: #d3d3d3;
    opacity: 0.5;
  }
`

export const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 55%;
  padding: 30px;
  background-color: #fff;
`

export const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0px 10px;

  p {
    font-size: 18px;
  }

  .total,
  .total-amount {
    font-size: 18px;
    font-weight: bolder;
  }
`

export const StyledTextContainer = styled.div`
  width: 50%;
`

export const StyledAmountContainer = styled.div`
  text-align: right;
  width: 50%;
`

export const StyledBtnCheckout = styled.button`
  align-self: flex-end;
  width: 145px;
  height: 35px;
  margin-top: 15px;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #4f517d;
  cursor: pointer;
`
