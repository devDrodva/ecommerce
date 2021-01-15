import React from 'react'
import AddButton from '../Button/index'
import { WrapperItem, ImageProduct, InfoProduct } from './styles'

const CollectionItem = ({ item }) => {
  return (
    <WrapperItem>
      <ImageProduct img={item.imageUrl} />
      <AddButton />
      <InfoProduct>
        <p className='product-name'>{`'${item.name}'`}</p>
        <p className='price'>${item.price}</p>
      </InfoProduct>
    </WrapperItem>
  )
}

export default CollectionItem
