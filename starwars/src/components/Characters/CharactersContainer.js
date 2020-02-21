import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Characters from './Characters'

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [nextButton, setNextButton] = useState(true)
  const [prevButton, setPrevButton] = useState(false)

  const STARWARS_PEOPLE_API = `https://swapi.co/api/people/?page=${currentPage}`

  useEffect(() => {
    async function fetchCharacterData() {
      try {
        let res = await axios.get(STARWARS_PEOPLE_API)
        res.data.results.forEach(async character => {
          const homeworld = await getCharacterWorldName(character.homeworld)
          const newCharacter = {
            name: character.name,
            homeworld: homeworld,
          }
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
    setCurrentPage(currentPage => currentPage + 1)
    if (currentPage === 9) {
      setNextButton(false)
    }
  }

  const updateButtonStatus = () => {
    setPrevButton(currentPage !== 1)
    setNextButton(currentPage !== 9)
  }

  return (
    <Characters
      characters={characters}
      setCurrentPage={setCurrentPage}
      nextButtonEnabed={nextButton}
      prebButtonEnabled={prevButton}
    />
  )
}

export default CharactersContainer
