import React, { useState } from 'react'

import { SubHeader, } from '../Common'
import { WeatherForm, } from './WeatherForm'
import { WeatherTable, } from './WeatherTable'

const WeatherSummary = () => {
  const [city, setCity] = useState(null)

  const getWeather = (e) => {
    e.preventDefault()
    const cityName = e.target.elements.cityName.value
    setCity(cityName)
    e.target.elements.cityName.value = ""
  }

  return (
    <>
      <SubHeader getSubHeader={"Weather Summary"}/>
      <WeatherForm getWeather={getWeather}/>
      <WeatherTable getCity={city} />
    </>
  );
}

export default WeatherSummary
