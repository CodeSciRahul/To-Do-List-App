import { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Main/>
    </>
  )
}

export default App
