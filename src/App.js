import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Navbar from './components/Navbar'

/** Routes */
import Home from './pages/Home'
import Products from './pages/Products'
import Stacks from './pages/Stacks'

import './css/reset.css'
import './css/fonts.css'
import './css/global.css'
import './css/normalize.css'

document.title = 'JnJ 2020'

class App extends React.Component {
  render () {
    return (
      <FlexContainer>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/stacks" component={Stacks} />
          <Route path="/products" component={Products} />
        </Router>
      </FlexContainer>
    )
  }
}

const FlexContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
`

export default App
