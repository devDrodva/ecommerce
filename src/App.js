import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CartProvider } from './store/Cart/context'
import Nav from './components/Navbar/index'
import Home from './pages/Home/index'
import CheckOut from './pages/Checkout/index'

function App() {
  return (
    <CartProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/checkout' component={CheckOut} />
          <CheckOut />
        </Switch>
      </Router>
    </CartProvider>
  )
}

export default App
