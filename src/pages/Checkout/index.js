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
  StyledCounter,
  StyledBtnProduct,
} from './styles'

const CheckOut = () => {
  return (
    <Wrapper>
      <StyledProfile>
        <StyledCheckout>
          <StyledInfo>
            <p>Checkout</p>
            <hr />
          </StyledInfo>
          <StyledProductDescription>
            <StyledProductImage />
            <StyledProductCost>
              <p>Belted Plaid Blazer</p>
              <StyledAddProduct>
                <StyledBtnProduct>
                  <p>-</p>
                </StyledBtnProduct>
                <StyledCounter>
                  <span>10</span>
                </StyledCounter>
                <StyledBtnProduct>
                  <p>+</p>
                </StyledBtnProduct>
              </StyledAddProduct>
              <p>$30</p>
            </StyledProductCost>
          </StyledProductDescription>
          <hr />
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
          <hr />
          <StyledBtnCheckout>
            <p>confirm checkout</p>
          </StyledBtnCheckout>
        </StyledCheckout>
      </StyledProfile>
    </Wrapper>
  )
}

export default CheckOut
