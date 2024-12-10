import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import { BrowserRouter as Router,Routes,Route, useSearchParams } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
import SerchItem from './Components/SerchItem'
import Cart from './Components/Cart'
import { items } from './Components/Data'


const App = () => {


  const[data, setData] = useState([...items])
  const[cart, setCart] = useState([])


  return (
    <>
        <Router>
        <Navbar cart={cart} setData={setData}/>
          <Routes>
            <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/serch/:term' element={<SerchItem/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
