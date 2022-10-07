import Navbar from "./components/Navbar"
import Explore from "./components/Explore"
import Menu from "./components/Menu"
import {useState } from 'react'

function App() {
const [show,setShow]=useState(false)

  return (
    <div className="App">
      <Navbar show={show} setShow={setShow}/>

     <Menu show={show}/>
      <Explore show={show}/>
    
  
    </div>
  )
}

export default App
