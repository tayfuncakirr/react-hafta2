import { useState } from 'react'
import FetchAPI from './FetchAPI'
import './App.css'
import AxiosAPI from './AxiosAPI'

function App() {
  

  return (
    <div className='container'>
     <div className='main-fetch'><FetchAPI/></div> 
      <hr />
      <div className="main-axios"><AxiosAPI/></div>
    </div>
  )
}

export default App
