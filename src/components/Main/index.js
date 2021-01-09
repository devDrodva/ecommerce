import React from 'react'
import StyledMain from './styles'
import Wrapper from '../Wrapper'
import CardList from '../CardList/index'

const Main = () => {
  return (
    <Wrapper>
      <StyledMain>
        <CardList />
      </StyledMain>
    </Wrapper>
  )
}
export default Main
