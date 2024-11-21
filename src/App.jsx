import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
  <div className=''>
    <Header/>
    <Outlet/>
    <div>footer</div>
  </div>
  )
}

export default App