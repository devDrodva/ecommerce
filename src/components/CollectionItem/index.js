import React from 'react'
import { WrapperItem, ImageProduct, AddButton, InfoProduct } from './styles'

const CollectionItem = ({ item }) => {
  return (
    <WrapperItem>
      <ImageProduct img={item.imageUrl} />
      <AddButton>ADD TO CART</AddButton>
      <InfoProduct>
        <p className='product-name'>{`'${item.name}'`}</p>
        <p className='price'>${item.price}</p>
      </InfoProduct>
    </WrapperItem>
  )
}

export default CollectionItem
