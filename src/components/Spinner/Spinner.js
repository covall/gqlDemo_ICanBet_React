import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = () => (
  <SoccerIconContainer>
    <SoccerIconAnimated />
    <Text>Ładowanie...</Text>
  </SoccerIconContainer>
)

const SoccerIcon = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="130px"
    height="130px"
    {...props}
  >
    <radialGradient
      id="a"
      cx={64}
      cy={31.209}
      gradientUnits="userSpaceOnUse"
      r={65.44}
    >
      <stop offset={0} stopColor="#616262" />
      <stop offset={0.904} stopColor="#212121" />
    </radialGradient>
    <circle cx={64} cy={64} r={60} fill="url(#a)" />
    <defs>
      <circle id="b" cx={64} cy={64} r={60} />
    </defs>
    <clipPath id="c">
      <use xlinkHref="#b" overflow="visible" />
    </clipPath>
    <radialGradient
      id="d"
      cx={75.775}
      cy={93.349}
      gradientTransform="rotate(180 65 62.514)"
      gradientUnits="userSpaceOnUse"
      r={77.756}
    >
      <stop offset={0.342} stopColor="#f5f5f5" />
      <stop offset={0.757} stopColor="#e0e0e0" />
    </radialGradient>
    <path
      clipPath="url(#c)"
      fill="url(#d)"
      d="M64 145.14L39.38 95.25l-55.06-8 39.84-38.84-9.41-54.83L64 19.47l49.25-25.89-9.41 54.83 39.84 38.84-55.06 8z"
    />
    <defs>
      <circle id="e" cx={64} cy={64} r={60} />
    </defs>
    <path
      d="M64 7c31.43 0 57 25.57 57 57s-25.57 57-57 57S7 95.43 7 64 32.57 7 64 7m0-3C30.86 4 4 30.86 4 64s26.86 60 60 60 60-26.86 60-60S97.14 4 64 4z"
      fill="#434343"
      opacity={0.2}
    />
    <linearGradient
      id="f"
      gradientUnits="userSpaceOnUse"
      x1={43.647}
      x2={43.647}
      y1={63.464}
      y2={101.515}
    >
      <stop offset={0} stopColor="#616262" />
      <stop offset={0.897} stopColor="#212121" />
    </linearGradient>
    <path
      d="M38.48 98.24c-.26 0-.52-.06-.77-.2-.78-.43-1.07-1.4-.64-2.18l10.33-18.9c.43-.78 1.4-1.07 2.18-.64.78.43 1.07 1.4.64 2.18L39.89 97.4c-.29.54-.84.84-1.41.84z"
      fill="url(#f)"
    />
    <linearGradient
      id="g"
      gradientUnits="userSpaceOnUse"
      x1={84.501}
      x2={84.501}
      y1={63.464}
      y2={101.515}
    >
      <stop offset={0} stopColor="#616262" />
      <stop offset={0.897} stopColor="#212121" />
    </linearGradient>
    <path
      d="M89.93 98.9c-.57 0-1.12-.3-1.41-.84L77.66 78.13c-.42-.78-.14-1.76.64-2.18.78-.42 1.76-.14 2.18.64l10.85 19.93c.42.78.14 1.76-.64 2.18-.24.14-.5.2-.76.2z"
      fill="url(#g)"
    />
    <g>
      <linearGradient
        id="h"
        gradientUnits="userSpaceOnUse"
        x1={86.416}
        x2={98.916}
        y1={49.627}
        y2={48.556}
      >
        <stop offset={0} stopColor="#434343" />
        <stop offset={0.896} stopColor="#212121" />
      </linearGradient>
      <path
        d="M88.46 50.88a1.6 1.6 0 0 1-1.6-1.51 1.61 1.61 0 0 1 1.5-1.71l16.45-1.04c.9-.05 1.65.62 1.71 1.5.06.89-.62 1.65-1.5 1.71l-16.45 1.04c-.04 0-.07.01-.11.01z"
        fill="url(#h)"
      />
    </g>
    <g>
      <linearGradient
        id="i"
        gradientUnits="userSpaceOnUse"
        x1={64.212}
        x2={64.212}
        y1={18.464}
        y2={32.956}
      >
        <stop offset={0.094} stopColor="#434343" />
        <stop offset={1} stopColor="#616262" />
      </linearGradient>
      <path
        d="M64.21 32.68c-.89 0-1.61-.72-1.61-1.61V18.09a1.609 1.609 0 1 1 3.22 0v12.98c0 .89-.72 1.61-1.61 1.61z"
        fill="url(#i)"
      />
    </g>
    <g>
      <linearGradient
        id="j"
        gradientUnits="userSpaceOnUse"
        x1={17.242}
        x2={36.349}
        y1={46.84}
        y2={49.519}
      >
        <stop offset={0} stopColor="#434343" />
        <stop offset={0.896} stopColor="#212121" />
      </linearGradient>
      <path
        d="M39.58 50.97h-.11l-16.49-1.1a1.61 1.61 0 0 1 .21-3.21l16.49 1.1c.89.06 1.56.82 1.5 1.71a1.6 1.6 0 0 1-1.6 1.5z"
        fill="url(#j)"
      />
    </g>
    <linearGradient
      id="k"
      gradientUnits="userSpaceOnUse"
      x1={64}
      x2={64}
      y1={21.679}
      y2={76.321}
    >
      <stop offset={0} stopColor="#616262" />
      <stop offset={0.901} stopColor="#212121" />
    </linearGradient>
    <path
      fill="url(#k)"
      d="M48.17 78.72l-9.79-30.11L64 30l25.62 18.61-9.79 30.11z"
    />
  </svg>
)

const bounce = keyframes`
  from {
    transform: translateY(0) rotate(0deg);
  }

  to {
    transform: translateY(-200%) rotate(360deg);
  }
`

const opacity = keyframes`
  from {
    opacity: .8;
  }

  to {
    opacity: .3;
  }
`

const Text = styled.div`
  text-align: center;
  animation: 500ms ${opacity} infinite alternate;
`

const SoccerIconContainer = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  left: calc(50% - 65px);
  top: 50%;
`

const SoccerIconAnimated = styled(SoccerIcon)`
  animation: 500ms ${bounce} infinite alternate,
    500ms ${opacity} infinite alternate;
  animation-timing-function: cubic-bezier(0.38, 0.17, 0.11, 0.85);
`

export default Spinner
