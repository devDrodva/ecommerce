import styled from 'styled-components'

export const ImageProduct = styled.div`
  width: 230px;
  height: 350px;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  padding: 15px;
  background-color: #fff;

  .product-name {
    font-size: 16px;
  }

  .price {
    font-size: 20px;
    font-weight: bold;
  }
`

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover ${ImageProduct} {
    opacity: 50%;
  }

  &:hover :nth-child(2n) {
    display: block;
    visibility: visible;
  }
`
