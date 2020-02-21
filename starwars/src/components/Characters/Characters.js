import React from 'react'
import styled from 'styled-components';

import CharacterCard from './CharacterCard'
const Characters = props => {

  const CharactersList = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `
  return (
    <CharactersList>
      {props.characters.map(character => (
        <CharacterCard key={character.name} name={character.name} homeworld={character.homeworld}/>
      ))}
    </CharactersList>
  )
}

export default Characters;