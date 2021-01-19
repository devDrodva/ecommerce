import React from 'react'
import { StyledNav, Logo, ShoppingBagContainer, ShoppingBagSVG } from './styles'

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <i className='fab fa-artstation'> </i>
      </Logo>
      <ShoppingBagContainer>
        <ShoppingBagSVG />
        <span className='counter'>0</span>
      </ShoppingBagContainer>
    </StyledNav>
  )
}
export default Nav
