import styled from 'styled-components'

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
  background: url(${(props) => props.img});
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
export const StyledAddProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 25px;
  margin-left: 50px;

  .btn-products {
    width: 30px;
    height: 25px;
    text-align: center;
    border: 1px solid #d3d3d3;
    cursor: pointer;
  }
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
