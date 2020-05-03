import React from 'react'
import styled, { keyframes } from 'styled-components'
import Emoji from '../Emoji'

type HeaderArrowProps = {
  isInput?: Boolean
}

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
  text-align: left;
  padding: 0.2rem 0.5rem;
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

const HeaderArrow = ({ isInput }: HeaderArrowProps) => {
  return (
    <HeaderArrowContent>
      <img src="arrow.png" alt="arrow" />
      <HeaderArrowText>
        <div>
          <Emoji label="hi" emoji="😉" />
          학번, 캠퍼스 입력 후 시작!
        </div>
      </HeaderArrowText>
    </HeaderArrowContent>
  )
}

export default HeaderArrow
