import { useState } from 'react'
import Personal from './components/personal/Personal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>
        Vamos criar seu CV!
      </h2>
      <Personal/>
    </>
  )
}

export default App
