import React from 'react'
import StyledCollectionItem from '../CollectionItem/styles'
import StyledCollection from './styles'

const Collection = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <StyledCollection>
      {array.map((element) => (
        <StyledCollectionItem element={element} />
      ))}
    </StyledCollection>
  )
}

export default Collection
