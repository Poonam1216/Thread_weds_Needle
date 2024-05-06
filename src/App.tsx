import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState<number>(0);

  return (
    <>
      <h1 className="text-yellow-400">Hello World</h1>
    </>
  )
}

export default App
