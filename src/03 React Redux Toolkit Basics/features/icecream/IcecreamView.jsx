import React from 'react'
import { useSelector } from 'react-redux'

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  
  return (
    <div>
      <h2>Number of Ice-creams : {numOfIcecreams}</h2>
      <button>Order ice-cream</button>
      <button>Restock ice-cream</button>
    </div>
  )
}

export default IcecreamView
