import React from 'react'
import { CartProvider } from './store/Cart/context'
import Nav from './components/Navbar/index'
import Home from './pages/Home/index'

function App() {
  return (
    <CartProvider>
      <Nav />
      <Home />
    </CartProvider>
  )
}

export default App
