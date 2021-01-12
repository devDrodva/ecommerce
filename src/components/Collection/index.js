import React, { useEffect, useState } from 'react'
import StyledCollection from './styles'
import CollectionItem from '../CollectionItem/index'
import SHOP_DATA from '../../data'

const Collection = () => {
  const [products, setProducts] = useState([])

  const getData = async () => {
    const data = SHOP_DATA
    setProducts(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <StyledCollection>
      {products.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </StyledCollection>
  )
}

export default Collection
