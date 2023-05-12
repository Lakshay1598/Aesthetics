import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Svg from './components/Svg'
import mountains from './assets/mountains.jpg'
import citylights from './assets/citylights.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="parent_Main">
      <header>
        <Navbar />
      </header>
        <Svg />
      <div className='Sentence'>
        <div className='title'>
          Aesthetics
        </div>  
      </div>

      <div className="vidHouse">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  )
}

export default App
