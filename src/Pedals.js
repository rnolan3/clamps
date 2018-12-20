import React from 'react'

import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from { transform: translate(-50%, -50%) rotate(0); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`

const mobileRoate = keyframes`
  from { transform: translate(-50%, -50%) rotate(0) scale(.7); }
  to { transform: translate(-50%, -50%) rotate(360deg) scale(.7); }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const foldIn = keyframes`
  from {
    transform: rotate3d(1, 1, 1, -120deg);
  }

  80% {
    transform: rotate3d(1, 1, 1.5, -25deg);
  }

  to {
    transform: rotate3d(1, 1, 1.5, -55deg);
  }
`

const Wrapper = styled.div`
  height: ${ props => props.size }px;
  width: ${ props => props.size }px;
  position: absolute;

  border-radius: 50%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${ rotate };
  animation-duration: 120s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: ${ props => props.reverse ? 'reverse' : 'normal' };

  @media (max-width: 700px) {
    animation-name: ${ mobileRoate };
    transform: translate(-50%, -50%) scale(0.7);
  }
`

const Pedal = styled.div`
  height: ${ props => props.childSize }px;
  width: ${ props => props.childSize }px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(${ props => props.index/props.length * 360 }deg);
  transform-origin: center ${ props => props.size/2 }px;
  animation: ${ fadeIn } 1s;


  &:after {
    background: ${ props => props.alt || 'rgb(255, 255, 255)' };
    height: ${ props => props.childSize }px;
    width: ${ props => props.childSize }px;
    border: 1px solid #777;
    transform: rotate3d(1, 1, 1.5, -55deg);
    content: '';
    display: block;
    border-radius: 6px;
    animation: ${ foldIn } 3s;

  }
`

export default function Pedals ({ childSize, length, size, rotate, reverse, alts }) {
  const pedals = Array.from({ length }, (_, i) => i)
  return (
    <Wrapper size={ size } reverse={ reverse }>
      { pedals.map((_, key) => {
        if (alts > 0) {
          console.log(key % alts)
        }

        return (<Pedal
          alt={ alts > 0 ? key % alts === 0 ? 'rgb(255, 100, 100)' : 'rgb(255, 240, 240)' : false }
          size={ size }
          key={ key }
          index={ key }
          childSize={ childSize }
          length={ length }
          rotate={ rotate }
          last={ key + 1 === length } />)
      }) }
    </Wrapper>
  )
}

Pedals.defaultProps = {
  alts: false,
  reverse: false,
  length: 30,
  size: 400,
  childSize: 70,
  rotate: 'rotate3d(1, 1, 1.5, -75deg)'
}
