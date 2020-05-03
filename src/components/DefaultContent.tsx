import React, { useState, useEffect } from 'react'
import IntroduceCards from '../components/IntroduceCard'
import { introduceArr, Introduce } from '../config/introduce'
import styled, { keyframes } from 'styled-components'

//todo 애니메이션으로 페이드되게 앱 소개하기 + 화살표 붙이기
//todo useEffect setTimeout => 3초에 한번씩 컨텐츠 내용 바꾸기

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
  let [cardNum, setCardNum] = useState<number>(0)

  useEffect(() => {
    let cardTimer = setTimeout(() => setCardNum(cardNum + 1), 5000)
    return () => clearTimeout(cardTimer)
  })

  const updateCardNum = (idx: number) => {
    setCardNum(idx)
  }

  const { id, title, emoji, contents }: Introduce = introduceArr[cardNum % 3]

  return (
    <IntroduceCardsWrap>
      <IntroduceCards id={id} title={title} emoji={emoji} contents={contents} />
      {introduceArr.map((card, idx) =>
        idx === cardNum % 3 ? (
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
