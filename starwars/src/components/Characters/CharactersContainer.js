import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Characters from './Characters'

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [nextButtonDisabled, setNextButton] = useState(false)
  const [prevButtonDisabled, setPrevButton] = useState(false)

  const STARWARS_PEOPLE_API = `https://swapi.co/api/people/?page=${currentPage}`

  useEffect(() => {
    async function fetchCharacterData() {
      try {
        const thisPage = currentPage
        let res = await axios.get(STARWARS_PEOPLE_API)
        res.data.results.forEach(async character => {
          const homeworld = await getCharacterWorldName(character.homeworld)
          const newCharacter = {
            name: character.name,
            homeworld: '🌎  ' + homeworld,
          }
          console.log(currentPage);
          setCharacters(characters => [...characters, newCharacter])
        })
      } catch (error) {
        console.log(error)
      }
    }

    updateButtonStatus()
    fetchCharacterData()
  }, [currentPage])

  const getCharacterWorldName = async worldApiURL => {
    try {
      let res = await axios.get(worldApiURL)
      return res.data.name
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

  const nextPage = () => {
    setCharacters([])
    setCurrentPage(currentPage => currentPage + 1)
  }

  const prevPage = () => {
    setCharacters([])
    setCurrentPage(currentPage => currentPage - 1)
  }

  const updateButtonStatus = () => {
    setPrevButton(currentPage === 1)
    setNextButton(currentPage === 9)
  }

  return (
    <Characters
      characters={characters}
      setCurrentPage={setCurrentPage}
      nextPage={nextPage}
      prevPage={prevPage}
      nextButtonDisabled={nextButtonDisabled}
      prevButtonDisabled={prevButtonDisabled}
    />
  )
}

export default CharactersContainer
