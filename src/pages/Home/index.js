import React from 'react'
import StyledMain from './styles'
import Wrapper from '../../components/Wrapper'
import Collection from '../../components/Collection'

const Home = () => {
  return (
    <Wrapper>
      <StyledMain>
        <Collection />
      </StyledMain>
    </Wrapper>
  )
}
export default Home
