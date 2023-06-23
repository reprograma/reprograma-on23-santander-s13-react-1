import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Title text = "Helo Wordl!"/>
    <Subtitle>Todas em Tecj on23</Subtitle>
    <div className='card'>
      <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
      </button>
    </div>
   </>
  )
}

export default App 
