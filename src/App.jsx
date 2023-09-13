import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Features from './features'
import Footer from './footer'
import Blogs from './blogs'
import Frequent from './frequent'
import Choose from './choose'
import Landing from './landing'
import Landfoot from './landfoot'
import Track from './Track'
import Speak from './speak'
import Testimo from './testimo'
import Discover from './discover'
function App() {
  

  return (
    <div className="project">

      <div className="first">
        <Landing/>
      </div>
      <div className="firsti">
        <Landfoot/>
      </div>

    <div className="second">
      <Footer/>
    </div>
    <div className="third">
      <Track/>
    </div>
    
    <div className="fourth">
      <Choose/>
    </div>
    
      <div className="navigation">
       <Features/>
      </div>

      <div className="sixth">
      <Testimo/>
     </div>

      <div className="sixthi">
        <Speak/>
      </div>
      
     
     <div className="seventh">
      <Blogs/>
     </div>
     <div className="eigth">
      <Frequent/>
     </div>
     <div className="ninth">
      <Discover/>
     </div>
     
    </div>
  )
}

export default App
