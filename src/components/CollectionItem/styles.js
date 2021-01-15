import styled from 'styled-components'

export const ImageProduct = styled.div`
  width: 230px;
  height: 350px;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`

export const AddButton = styled.button`
  display: none;
  position: absolute;
  width: 190px;
  height: 50px;
  margin-bottom: 90px;
  padding: 10px;
  border: 1px solid #4f517d;
  color: #4f517d;
  font-weight: bold;
  :hover {
    color: #fff;
    background-color: #4f517d;
  }
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
  :hover ${AddButton} {
    display: block;
    visibility: visible;
  }
  :hover ${ImageProduct} {
    opacity: 50%;
  }
`
