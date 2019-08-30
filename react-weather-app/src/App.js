import React, { Component } from 'react'
import { BrowserRouter, } from 'react-router-dom'

import Routes from './Routes'
import { Header } from './Components/Common'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
