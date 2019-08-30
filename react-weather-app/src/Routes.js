import React from 'react'
import { Route, } from 'react-router-dom'

import WeatherSummary from './Components/Weather/WeatherSummary'
import WeatherDetail from './Components/Weather/WeatherDetail'

const Routes = () => (
  <>
    <Route exact path="/" component={WeatherSummary} />
    <Route exact path="/detail/:id" component={WeatherDetail} />
  </>
)

export default Routes
