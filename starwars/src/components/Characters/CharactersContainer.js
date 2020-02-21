import React, {useState, useEffect} from 'react'
import axios from 'axios';

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextButton, setNextButton] = useState(true);
  const [prevButton, setPrevButton] = useState(false);

  const STARWARS_PEOPLE_API = `https://swapi.co/api/people/?page=${currentPage}`;

  useEffect(() => {
    async function fetchCharacterData() {
      try {
        let res = await axios.get(STARWARS_PEOPLE_API);

        setCharacters(res.data.results.map(character => {
          const newCharacter = {

          }
        }));

      } catch (err) {
        console.log(err);
      }
    }

    updateButtonStatus();
    fetchCharacterData();
  }, [currentPage])

  const nextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
    if (currentPage === 9) {
      setNextButton(false);
    }
  }

  const updateButtonStatus = () => {
    setPrevButton(currentPage !== 1);
    setNextButton(currentPage !== 9)
  }

  return (
    <div></div>
  )
}

export default CharactersContainer;