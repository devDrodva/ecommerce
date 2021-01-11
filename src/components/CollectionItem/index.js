import React from 'react'
import { StyledCollectionItem, BackGroundImage, InfoProduct } from './styles'

const CollectionItem = ({ item }) => {
  return (
    <StyledCollectionItem>
      <BackGroundImage value={item.imageUrl} />
      <InfoProduct>
        <p className='product-name'>{`'${item.name}'`}</p>
        <p className='price'>{`$${item.price}`}</p>
      </InfoProduct>
    </StyledCollectionItem>
  )
}

export default CollectionItem
