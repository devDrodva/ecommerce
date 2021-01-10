import styled from 'styled-components'

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 35px;
  display: grid;
  justify-items: center;
`
export const StyledCard = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
`
export const StyledWrapperCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 25px;
`
