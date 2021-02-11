import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNav, Logo, ShoppingBagContainer, ShoppingBagSVG } from './styles'

const Nav = (props) => {
  return (
    <StyledNav>
      <Link to='/'>
        <Logo>
          <i className='fab fa-artstation'> </i>
        </Logo>
      </Link>
      <Link to='/checkout'>
        <ShoppingBagContainer>
          <ShoppingBagSVG />
          <span className='counter'>
            {
              // eslint-disable-next-line react/destructuring-assignment
              props.cartItemNumber
            }
          </span>
        </ShoppingBagContainer>
      </Link>
    </StyledNav>
  )
}
export default Nav
