import React, { useEffect, useState } from 'react'
import StyledCollection from './styles'
import CollectionItem from '../CollectionItem/index'
import SHOP_DATA from '../../data'

const Collection = () => {
  const [card, setCard] = useState([])

  const getData = async () => {
    const data = SHOP_DATA
    setCard(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <StyledCollection>
      {card.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </StyledCollection>
  )
}

export default Collection
