import React from 'react'
import styled from 'styled-components';

const CharacterCard = props => {
  const Card = styled.div`
    width: 600px;
    background: white;

    margin-bottom: 10px;
    padding: 10px;

    &:first-child {
      margin-top: 10px;
    }

    p {
      color: grey;
    }

    h1, p {
      margin: 0 0 5px;
    }
  `
  return (
    <Card>
      <h1>{props.name}</h1>
      <p>{props.homeworld}</p>
    </Card>
  )
}

export default CharacterCard;