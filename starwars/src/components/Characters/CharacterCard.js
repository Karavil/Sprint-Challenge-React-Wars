import React from 'react'
import styled from 'styled-components';

const CharacterCard = props => {
  const Card = styled.div`
    width: 100%;
    background: white;
    p {
      color: grey;
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