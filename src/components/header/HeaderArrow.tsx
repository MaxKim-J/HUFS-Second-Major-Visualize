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
  color: #002a48;
`

const HeaderArrowContent = styled.div`
  margin-top: 2rem;
  position: fixed;
  top: 4rem;
  animation: ${shakeEffectLarge} 1.3s ease infinite;
  font-size: 0.8rem;
  @media screen and (max-width: 750px) {
    top: 6.1rem;
    animation: ${shakeEffectSmall} 1.3s ease infinite;
    font-size: 0.6rem;
  }
`

const HeaderArrow = () => {
  return (
    <HeaderArrowContent>
      <HeaderArrowText>
        <Emoji label="hi" emoji="⬆️" />
        학번, 캠퍼스 입력 후 시작!
      </HeaderArrowText>
    </HeaderArrowContent>
  )
}

export default HeaderArrow
