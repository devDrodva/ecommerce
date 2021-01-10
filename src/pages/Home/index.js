import React from 'react'
import { StyledMain, StyledWrapperCards, StyledCard } from './style'
import Wrapper from '../../components/Wrapper'

const Home = () => {
  return (
    <Wrapper>
      <StyledMain>
        <StyledWrapperCards>
          <StyledCard />
          <StyledCard />
          <StyledCard />
          <StyledCard />
        </StyledWrapperCards>
      </StyledMain>
    </Wrapper>
  )
}
export default Home
