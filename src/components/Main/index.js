import React from 'react'
import { StyledMain, StyledWrapperCards, StyledCard } from './styles'
import Wrapper from '../Wrapper'

const Main = () => {
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
export default Main
