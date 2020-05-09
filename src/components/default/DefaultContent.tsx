import React, { useState, useEffect } from 'react'
import IntroduceCards from './IntroduceCard'
import { introduceArr, Introduce } from '../../config/introduce'
import styled from 'styled-components'

const IntroduceCardsWrap = styled.div`
  text-align: center;
`
const NavigationDot = styled.span<{ checked: boolean }>`
  margin-right: 1rem;
  color: #002a48;
  font-size: 2rem;
  opacity: ${props => (props.checked ? 1 : 0.5)};
  cursor: pointer;
`

const DefaultContent = () => {
  const [cardNum, setCardNum] = useState<number>(0)
  const introduceLength = introduceArr.length

  useEffect(() => {
    let cardTimer = setInterval(() => setCardNum(num => num + 1), 5000)
    return () => clearInterval(cardTimer)
  }, [cardNum])

  const updateCardNum = (idx: number) => {
    setCardNum(idx)
  }

  const { id, title, emoji, contents }: Introduce = introduceArr[
    cardNum % introduceLength
  ]

  return (
    <IntroduceCardsWrap>
      <IntroduceCards id={id} title={title} emoji={emoji} contents={contents} />
      {introduceArr.map((card, idx) =>
        idx === cardNum % introduceLength ? (
          <NavigationDot key={idx} checked={true}>
            ·
          </NavigationDot>
        ) : (
          <NavigationDot
            key={idx}
            checked={false}
            onClick={() => {
              updateCardNum(idx)
            }}
          >
            ·
          </NavigationDot>
        ),
      )}
    </IntroduceCardsWrap>
  )
}

export default DefaultContent
