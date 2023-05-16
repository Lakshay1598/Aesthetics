import './App.css'
import Navbar from './components/Navbar'
import Svg from './components/Svg'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <div className="parent_Main " style={{transform: 'translate3d(0px, -0.01px, 0px)'}}>
      <header>
        <Navbar />
      </header>
        <Svg />
      <div className='Sentence'>
        <div className='title'>
          Aesthetics
        </div>  
      </div>

      <HeroSection />
      
    </div>
  )
}

export default App
