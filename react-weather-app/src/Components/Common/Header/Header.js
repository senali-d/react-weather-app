import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 40px;
  margin: 40px;
  text-align: center;
  color: palevioletred;
`;

const Header = () => {
  return (
    <header>
      <Title>Weather App</Title>
    </header>
  )
}

export { Header }
