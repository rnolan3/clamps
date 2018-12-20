import React from 'react'
import styled, { keyframes } from 'styled-components'

import Slide from './Slide'
import Pedals from './Pedals'

const fadeIn = keyframes`
  from { opacity: 0; }
  60% { opacity: 0; }
  to { opacity: 1; }
`

const Tipsy = styled.h4`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: normal;
  animation: ${ fadeIn } 3s;

  input {
    outline: none;
    border: 0;
    border-bottom: 1px solid #666;
    font-size: 20px;
    text-align: center;
    width: 100px;
    font-family: 'Basier Circle';
  }
`

const Wrapper = styled(Slide)`
  transform: translateY(${ props => props.opened ? '-100%' : '0' });
  transition: transform 1s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: white;
`

export default function Opening (props) {
  function handleKeyDown (e) {
    if (parseInt(e.currentTarget.value) > 1000 && e.which === 13) {
      return props.onClick()
    }
  }

  return (
    <Wrapper opened={ props.opened }>
      <Pedals />
      <Pedals size={ 360 } />
      <Pedals size={ 300 } childSize={ 35 } length={ 40 } reverse alts="2" />
      <Tipsy>
        <p>long overdue.</p>
      </Tipsy>
    </Wrapper>
  )
}
