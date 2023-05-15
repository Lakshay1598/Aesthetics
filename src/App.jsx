import './App.css'
import Navbar from './components/Navbar'
import Svg from './components/Svg'
import mountains from './assets/mountains.jpg'
import citylights from './assets/citylights.jpg'

function App() {

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
        <div className="vid1" style={{backgroundImage: `url(${mountains})`}}></div>
        <div className="vid2" style={{backgroundImage: `url(${citylights})`}}></div>
        {/* <div className="vid3" style={{backgroundImage: `url(${mountains})`}}>lakshay</div>
        <div className="vid4" style={{backgroundImage: `url(${mountains})`}}>lakshay</div> */}
      </div>
    </div>
  )
}

export default App
