import React, {useState} from 'react'

function TestComponent() {

  let initialState = 0
  const [count, setCount] = useState(initialState)

  return (
    <div>

      <h1>Count: {count}</h1>
      <button>Increament</button>
    
    </div>
  )
}