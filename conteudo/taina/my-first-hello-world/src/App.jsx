import { useState } from 'react'
import Relogio from './components/Relogio'
import Card from './components/Card'

import './App.css'

import titania from '../src/components/titania.jpeg' 
import evangelion from '../src/components/evangelion.webp' 

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Card image={titania} title="Mahoutsukai no Yome" subtitle="2017" />
      <Card image={evangelion} title="Evangelion" subtitle="1990" />
      <Relogio/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
