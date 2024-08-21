import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './modules/products/pages/Products'
import Cart from './modules/cart/cart'
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
    <img   onClick={() => navigate("/cart")} style={{position:"absolute",right:"20px",top:"20px"}} height="60px" width="60px" src="./image.png"/>
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/cart"element={<Cart/>}></Route>
      </Routes>
    </>
  )
}

export default App
