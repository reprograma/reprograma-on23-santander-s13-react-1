
import {useState} from 'react'
import './App.css'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Relogio from './components/Relogio'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
       <Title text="Hello World"/>
       <Subtitle>Todas em tech on23</Subtitle>
       <Relogio/>
       <div className='card'> 
        <button onClick={() => setCount((count) => count + 1)} > 
          count is {count}
        </button>

       </div>
    </>
  )
}

export default App
