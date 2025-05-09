import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  // let counter = 10

  const addValue = () => {
    console.log("Value Added", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const reduceValue = () => {
    counter = counter - 1
    setCounter(counter)
    console.log("Value Reduced", counter);
  }

  return (
    <>
      <h1>Awsome React Works</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value
      </button>
      <br />
      <br />

      <button
        onClick={reduceValue}
      >Reduce Value
      </button>

    </>
  )
}

export default App
