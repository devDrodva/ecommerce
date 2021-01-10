import styled from 'styled-components'

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 35px;
  display: grid;
  justify-items: center;
`
export const StyledCard = styled.div`
  width: 160px;
  height: 300px;
  background-color: #fff;
`
export const StyledWrapperCards = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  justify-content: center;
  column-gap: 20px;
`
