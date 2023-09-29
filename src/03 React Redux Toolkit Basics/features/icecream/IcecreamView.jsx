import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../icecream/icecreamSlice'

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  const [value, setValue] = useState(1)

  return (
    <div>
      <h2>Number of Ice-creams : {numOfIcecreams}</h2>
      <div>
        <span>Enter number of ice-creams to restock : </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div><br />

      <button onClick={() => dispatch(ordered(1))}>Order ice-cream</button>
      <button onClick={() => dispatch(restocked(value))}>Restock ice-cream</button>
    </div>
  )
}

export default IcecreamView
