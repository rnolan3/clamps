import React, { Component } from 'react'

import styled, { css, createGlobalStyle, keyframes } from 'styled-components'

import Opening from './Opening'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: 'Basier Circle';
    font-size: 18px;
    height: 100%;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  html {
    height: 100%;
  }

  figure {
    margin: 0;
    font-size: 1em;
  }

  #root {
    height: 100%;
  }
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Opening />
      </>
    );
  }
}

export default App
