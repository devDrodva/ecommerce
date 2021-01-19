import styled from 'styled-components'
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg'

export const StyledNav = styled.nav`
  display: Flex;
  align-content: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 200px;
  background-color: #fff;
`

export const Logo = styled.h1`
  font-size: 35px;
`
export const ShoppingBagSVG = styled(ShoppingIconSVG)`
  width: 35px;
  height: auto;
`

export const ShoppingBagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  .counter {
    position: absolute;
    padding-top: 10px;
  }
`
