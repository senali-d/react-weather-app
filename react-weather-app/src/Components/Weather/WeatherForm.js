import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: palevioletred;
  color: white;
  margin: 10px 20px 10px 0;
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = styled.input`
  background: white;
  color: palevioletred;
  margin: 20px;
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const WeatherForm = props => (
  <div>
    <form onSubmit={props.getWeather} >
      <Input placeholder='Search...' type='text' name="cityName"/>
      <Button primary>Search</Button>
    </form>
  </div>
)

export { WeatherForm }
