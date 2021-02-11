import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductContext from './store/Cart/context'
import Nav from './components/Navbar/index'
import Home from './pages/Home/index'
import CheckOut from './pages/Checkout/index'

function App() {
  return (
    <ProductContext>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/checkout' component={CheckOut} />
          <CheckOut />
        </Switch>
      </Router>
    </ProductContext>
  )
}

export default App
