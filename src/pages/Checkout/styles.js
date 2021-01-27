import styled from 'styled-components'

export const StyledProfile = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 10px;

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

export const StyledInfo = styled.div`
  p {
    font-size: 30px;
    font-weight: normal;
  }

  hr {
    height: 1px;
    border: none;
    background-color: #546a76;
    opacity: 0.5;
  }
`

export const StyledProductDescription = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0px;
`
export const StyledProductImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 25px;
  border-radius: 20px;
  background-color: #d3d3d3;
`

export const StyledProductCost = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 150px;
  padding-top: 35px;
  border-radius: 20px;

  p {
    font-weight: bolder;
  }
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

export const StyledAddProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 25px;
  margin-left: 50px;
`
export const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 25px;
  align-content: center;
  text-align: center;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`

export const StyledBtnProduct = styled.button`
  width: 30px;
  height: 25px;
  text-align: center;
  border: 1px solid #d3d3d3;
  cursor: pointer;
`
