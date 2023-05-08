import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Svg from './components/Svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />
      </header>
      <h1>
        <Svg />
        <div className='title'>
          <a href="/">Aesthetics</a>
        </div>
        

      </h1>


    </>
  )
}

export default App
