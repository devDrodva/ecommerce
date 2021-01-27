import styled from 'styled-components'

export const StyledProfile = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 10px;

  p {
    font-size: 15px;
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

export const StyledInfo = styled.div`
  border-bottom: 3px solid #4f517d;

  p {
    font-size: 30px;
    font-weight: normal;
  }
`

export const StyledProductDescription = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px 0px;
  border-bottom: 3px solid #d3d3d3;
`

export const StyledProductImage = styled.div`
  width: 80px;
  height: 125px;
  margin: 0 25px;
  border-radius: 20px;
  background-color: #d3d3d3;
`

export const StyledProductCost = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 150px;
  border-radius: 20px;

  p {
    font-weight: bolder;
  }
`

export const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0px 10px;
  border-bottom: 3px solid #d3d3d3;

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

export const StyledAddProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 25px;
  border: 1px solid #d3d3d3;
`

export const StyledBtnProduct = styled.button`
  width: 30px;
  height: 25px;
  text-align: center;
  border: 1px solid #d3d3d3;
  cursor: pointer;
`
