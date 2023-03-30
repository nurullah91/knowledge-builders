import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <div className='container'>

        <Blogs></Blogs>
      </div>

    </div>
  )
}

export default App
