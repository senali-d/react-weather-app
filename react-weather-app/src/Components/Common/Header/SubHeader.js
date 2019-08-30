import React from 'react'
import styled from 'styled-components'

const SubTitle = styled.div`
  margin: 20px 20px 10px 20px;
  font-size: 20px;
  color: palevioletred;
`;

const SubHeader = (props) => {
  return (
    <div>
      <SubTitle>{props.getSubHeader}</SubTitle>
    </div>
  )
}

export { SubHeader }
