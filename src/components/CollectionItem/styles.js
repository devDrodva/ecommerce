import styled from 'styled-components'

export const StyledCollectionItem = styled.div`
  width: 230px;
  height: 350px;
  display: grid;
  background-color: #fff;
`
export const BackGroundImage = styled.div`
  height: 270px;
  background: url(${(props) => props.value});
  background-repeat: no-repeat;
  background-size: 230px;
`
export const InfoProduct = styled.div`
  display: grid;
  background-color: #fff;

  .product-name {
    font-size: 16px;
    text-align: center;
  }

  .price {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`
