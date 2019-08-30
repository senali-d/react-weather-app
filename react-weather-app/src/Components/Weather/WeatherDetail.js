import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import { SubHeader, } from '../Common'

const Button = styled.button`
  background: palevioletred;
  color: white;
  padding: 10px 20px;
  margin: 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Section = styled.div`
  margin: 20px 20px 0 0;
`
const Heading = styled.p`
  color: #33a166
  font-size: 16px;
  margin: 20px 0 0 20px;
  display:inline;
`

const Paragraph = styled.p`
  color: #82105a
  font-size: 16px;
  margin: 20px 20px 0 10px;
  display:inline;
`

const WeatherDetail = (props) => {
  const weatherDetail = props.location.state.detail

  return (
    <>
      <SubHeader getSubHeader={`Weather Deatail of the city ` + weatherDetail.name}/>
      <Section>
        <Heading>City: </Heading>
        <Paragraph>{weatherDetail.name}</Paragraph>
      </Section>
      <Section>
        <Heading>Temperature:  </Heading>
        <Paragraph>{weatherDetail.main.temp}</Paragraph>
      </Section>
      <Section>
        <Heading>Weather: </Heading>
        <Paragraph>{weatherDetail.weather[0].main}</Paragraph>
      </Section>
      <Section>
        <Heading>Weather Description </Heading>
        <Paragraph>{weatherDetail.weather[0].description}</Paragraph>
      </Section>
      <Section>
        <Heading>Humidity: </Heading>
        <Paragraph>{weatherDetail.main.humidity}</Paragraph>
      </Section>
      <Section>
        <Heading>Wind Speed: </Heading>
        <Paragraph>{weatherDetail.wind.speed}</Paragraph>
      </Section>
      <Section>
        <Heading>Clouds: </Heading>
        <Paragraph>{weatherDetail.clouds.all}</Paragraph>
      </Section>
      <Button>
        <Link to="/">Go Back</Link>
      </Button>
    </>
  )
}

export default WeatherDetail;
