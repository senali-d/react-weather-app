import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import styled from 'styled-components'

const Button = styled.button`
  background: palevioletred;
  color: white;
  padding: 10px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const WeatherTableRow = (props) => {

  return (
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.temperature}</Table.Cell>
      <Table.Cell>{props.description}</Table.Cell>
      <Table.Cell>
        <Button>
          <Link to={{
            pathname: `/detail/${props.id}`,
            state: {detail: props.weatherObject}
          }}>View Detail</Link>
        </Button>
      </Table.Cell>
      <Table.Cell>
        {props.button}
      </Table.Cell>
    </Table.Row>
  )
}

export { WeatherTableRow }
