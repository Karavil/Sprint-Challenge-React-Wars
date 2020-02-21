import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import CharactersContainer from './components/Characters/CharactersContainer';

import backgroundImage from './sw-bg.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;

    text-align: center;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    font-family: sans-serif;
  }
`

const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <GlobalStyle />
      <Header>React Wars</Header>
      <CharactersContainer/>
    </div>
  )
}

export default App
