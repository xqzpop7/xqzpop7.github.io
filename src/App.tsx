import './App.css'

import UnderConstructionGif from './assets/Under Construction.gif'
import CodingGif from './assets/Coding.gif'

function App() {

  return (
    <>
      <img className="Gifs" src={ UnderConstructionGif } alt='Text "Under Construction" with an animated background.' ></img>
      <img className="Gifs" src={ CodingGif } alt='Stickman banging his head into a keyboard on a construction sign.' ></img>
    </>
  )
}

export default App
