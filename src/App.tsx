

import { RetroGrid } from './components/magicui/retro-grid'
import { Safari } from './components/magicui/safari'



import './App.css'

function App() {


  return (
    <div >'
     <div >
      {/* Background Grid */} 
      <RetroGrid className="absolute inset-0 -z-10  " angle={50} lightLineColor='purple' opacity={1} />

      {/* Main Content */}
      <div className="flex justify-center">
      <Safari url="parham-music-player" className="size-8/12 dark " /> 
      
     
    </div>
     
      
    </div>
  </div>
  )
}

export default App
