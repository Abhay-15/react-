import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num,setNum]=useState(0)
function increment() {
  setNum(num + 1)
}

function decrement() {
  setNum(num - 1)
}
function jump5() {
  setNum(num +1000)
}

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increment}> increase </button>
      <button onClick={decrement}>decrease </button>
      <button onClick={jump5}>jumpby5 </button>
    </div>
  )
}

export default App
