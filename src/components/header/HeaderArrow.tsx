import React from 'react'
import styled, { keyframes } from 'styled-components'
import Emoji from '../Emoji'

const shakeEffectLarge = keyframes`
    0% {
        top:5rem;
    }
    50%{
        top:4rem;
    }
    100% {
        top:5rem;
    }
`

const shakeEffectSmall = keyframes`
    0% {
        top:7rem;
    }
    50%{
        top:6.1rem;
    }
    100% {
        top:7rem;
    }
`

const HeaderArrowText = styled.div`
  padding: 0.2rem 0.4rem;
  font-weight: 700;
`

const HeaderArrowContent = styled.div`
  position: fixed;
  top: 4rem;
  animation: ${shakeEffectLarge} 1.7s ease infinite;
  font-size: 0.8rem;
  @media screen and (max-width: 750px) {
    top: 6.1rem;
    animation: ${shakeEffectSmall} 1.7s ease infinite;
    font-size: 0.6rem;
  }
`

const HeaderArrow = () => {
  return (
    <HeaderArrowContent>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40"
        height="40"
        viewBox="0 0 172 172"
        fill="#000000"
        transform="rotate(180)"
      >
        <g
          fill="none"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#ffffff">
            <path d="M40.90017,76.7335l40.033,40.033c2.80217,2.80217 7.33867,2.80217 10.13367,0l40.033,-40.033c4.515,-4.515 1.31867,-12.2335 -5.06683,-12.2335h-80.066c-6.3855,0 -9.58183,7.7185 -5.06683,12.2335z"></path>
          </g>
        </g>
      </svg>

      <HeaderArrowText>
        <Emoji label="hi" emoji="😉" />
        학번, 캠퍼스 입력 후 시작!
      </HeaderArrowText>
    </HeaderArrowContent>
  )
}

export default HeaderArrow
