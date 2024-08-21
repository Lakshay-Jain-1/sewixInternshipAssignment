import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './modules/products/pages/Products'

function App() {
  return (
    <>
    <img style={{position:"absolute",right:"20px",top:"20px"}} height="60px" width="60px" src="./image.png"/>
    <Routes>
      <Route path="/" element={<Products />}></Route>
      </Routes>
    </>
  )
}

export default App
