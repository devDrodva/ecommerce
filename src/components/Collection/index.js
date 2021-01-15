import React from 'react'
import {StyledCollection} from './styles'
import CollectionItem from '../CollectionItem/index'
import SHOP_DATA from '../../data'

const Collection = () => {
  return (
    <StyledCollection>
      {SHOP_DATA.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </StyledCollection>
  )
}

export default Collection
