import React from 'react'
import { Table, Loader } from 'semantic-ui-react'
import styled from 'styled-components'

import { Weather, } from '../../Containers/Weather.container'
import { WeatherTableRow, } from './WeatherTableRow'
import { LocalStorageGet, LocalStorageSet } from '../../Utils/LocalStorage.util'

const Wrapper = styled.div`
  margin: 20px 20px 10px 20px;
`;

const WeatherTable = props => {
  const {data, setData, isLoading} = Weather(props.getCity)

  const clickHandler = (key) => {
    const newArray = LocalStorageGet("wet").slice(0,key).concat(LocalStorageGet("wet").slice(key+1))
    setData([])
    setData(newArray)
    localStorage.removeItem('wet')
    LocalStorageSet("wet", newArray)
  }

  return (
    <Wrapper>
      { isLoading ?  <Loader size='medium'>Loading</Loader> : '' }
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { data.map((cityData, key) =>
            <WeatherTableRow
              key={key}
              name={cityData.name}
              temperature={cityData.main.temp}
              description={cityData.weather[0].description}
              id={cityData.id}
              weatherObject={cityData}
              button=<button onClick={clickHandler.bind(this, key)} className="remove_btn">Remove</button>
            />
          )}
        </Table.Body>
      </Table>
    </Wrapper>
  )
}

export { WeatherTable }
