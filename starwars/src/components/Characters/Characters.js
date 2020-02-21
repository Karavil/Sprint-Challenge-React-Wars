import React, { useState } from 'react'
import styled from 'styled-components'

import CharacterCard from './CharacterCard'
const Characters = props => {
  const CharactersList = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `
  const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  `

  const Button = styled.button`
    width: 300px;
    padding: 2rem 1rem;

    border: none;

    font-size: 1.3rem;

    &:disabled {
      background: grey;
    }

    &:nth-child(1) {
      border-radius: 10px 0 0 10px;
      border-right: 2px solid black;
    }

    &:nth-child(2) {
      border-radius: 0 10px 10px 0;
    }
  `
  return (
    <>
      <ButtonList>
        <Button onClick={props.prevPage} disabled={props.prevButtonDisabled}>
          Prev Page
        </Button>
        <Button onClick={props.nextPage} disabled={props.nextButtonDisabled}>
          Next Page
        </Button>
      </ButtonList>
      <CharactersList>
        {props.characters.map(character => (
          <CharacterCard
            key={character.name}
            name={character.name}
            homeworld={character.homeworld}
          />
        ))}
      </CharactersList>
    </>
  )
}

export default Characters
