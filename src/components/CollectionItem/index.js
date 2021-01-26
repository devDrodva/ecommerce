import React, { useContext, useReducer } from 'react'
import { CartContext } from '../../store/Cart/context'
import productReducer from '../../store/Cart/reducer'
import addItem from '../../store/Cart/actions'
import AddButton from '../Button/index'
import { WrapperItem, ImageProduct, InfoProduct } from './styles'

const CollectionItem = ({ item }) => {
  const { products } = useContext(CartContext)
  const dispatch = useReducer(productReducer, addItem)

  return (
    <WrapperItem>
      <ImageProduct img={item.imageUrl} />
      <AddButton onClick={() => dispatch(products, 'ADD_ITEM')} />
      <InfoProduct>
        <p className='product-name'>{`'${item.name}'`}</p>
        <p className='price'>${item.price}</p>
      </InfoProduct>
    </WrapperItem>
  )
}

export default CollectionItem
