import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './modules/products/pages/Products'
import CartPage from './modules/cart/Pages/Cart'

function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/cart"element={<CartPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
