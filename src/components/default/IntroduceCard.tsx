import React from 'react'
import styled from 'styled-components'
import Emoji from '../Emoji'
import { Introduce } from '../../config/introduce'

const CardWrap = styled.div`
  text-align: center;
  border-radius: 20px;
  padding-top: 8rem;
  padding-bottom: 3rem;
`

const CardTitle = styled.div`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  @media screen and (max-width: 750px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.7rem;
  }
`

const CardLogo = styled.div`
  font-size: 5rem;
  margin-bottom: 1rem;
`

const CardContent = styled.div`
  font-size: 0.8rem;
  @media screen and (max-width: 750px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.5rem;
  }
`

const IntroduceCard = ({ title, emoji, contents }: Introduce) => {
  return (
    <CardWrap>
      <CardLogo>
        <Emoji label="intro" emoji={emoji} />
      </CardLogo>
      <CardTitle>{title}</CardTitle>
      {contents.map((content, idx) => (
        <CardContent key={idx}>{content}</CardContent>
      ))}
    </CardWrap>
  )
}

export default IntroduceCard
