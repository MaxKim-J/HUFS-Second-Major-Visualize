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

const HeaderArrowText = styled.div`
  padding: 0.2rem 0.4rem;
  font-weight: 700;
  color: #002a48;
`

const HeaderArrowContent = styled.div`
  margin-top: 2rem;
  position: fixed;
  top: 4rem;
  -webkit-animation: ${shakeEffectLarge} 1.3s ease infinite;
  font-size: 0.8rem;
  @media screen and (max-width: 800px) {
    display: none;
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
