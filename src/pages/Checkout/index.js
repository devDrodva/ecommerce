import React from 'react'
import Wrapper from '../../components/Wrapper'
import {
  StyledProfile,
  StyledCheckout,
  StyledInfo,
  StyledProductDescription,
  StyledProductImage,
  StyledProductCost,
  StyledTotal,
  StyledTextContainer,
  StyledAmountContainer,
  StyledBtnCheckout,
  StyledAddProduct,
  StyledBtnProduct,
} from './styles'

const CheckOut = () => {
  return (
    <Wrapper>
      <StyledProfile>
        <StyledCheckout>
          <StyledInfo>
            <p>Checkout</p>
          </StyledInfo>
          <StyledProductDescription>
            <StyledProductImage />
            <StyledProductCost>
              <p>Belted Plaid Blazer</p>
              <StyledAddProduct>
                <StyledBtnProduct>
                  <p>-</p>
                </StyledBtnProduct>
                <span>10</span>
                <StyledBtnProduct>
                  <p>+</p>
                </StyledBtnProduct>
              </StyledAddProduct>
            </StyledProductCost>
          </StyledProductDescription>
          <StyledTotal>
            <StyledTextContainer>
              <p>Subtotal</p>
              <p>Shipping</p>
              <p>Taxes</p>
              <p className='total'>Total</p>
            </StyledTextContainer>
            <StyledAmountContainer>
              <p>$169,96</p>
              <p>Free</p>
              <p>$22,09</p>
              <p className='total-amount'>$192,05</p>
            </StyledAmountContainer>
          </StyledTotal>
          <StyledBtnCheckout>
            <p>confirm checkout</p>
          </StyledBtnCheckout>
        </StyledCheckout>
      </StyledProfile>
    </Wrapper>
  )
}

export default CheckOut
