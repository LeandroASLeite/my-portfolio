import './App.css'
import React from 'react'
import Main from './Components/main'
import Nav from './Components/nav'
import About from './Components/about'
import Experience from './Components/experience'
import Knowledge from './Components/knowledge'
const App = () => {
  return (<>
    <Nav />




    <div id="home">
      <Main />
    </div>
    <div id="sobre">
      <About />
    </div>
    <div id="experiencia">
      <Experience />
    </div>
    <div id="conhecimento">
      <Knowledge />
    </div>
  </>
  )
}

export default App