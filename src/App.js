import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

/** Routes */
import Home from './pages/Home'
import Products from './pages/Products'

import './css/reset.css'
import './css/fonts.css'
import './css/global.css'
import './css/normalize.css'

document.title = 'JnJ 2020'

class App extends React.Component {
  render () {
    return (
      <Container>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Router>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export default App
