import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './modules/products/pages/Products'
import CartPage from './modules/cart/Pages/Cart'
import Success from './modules/shared/components/success'
import Failed from './modules/shared/components/failed'

function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Products />}></Route>
      <Route path="/cart"element={<CartPage/>}></Route>
      <Route path="/success"element={<Success/>}></Route>
      <Route path="/failed"element={<Failed/>}></Route>
      </Routes>
    </>
  )
}

export default App
