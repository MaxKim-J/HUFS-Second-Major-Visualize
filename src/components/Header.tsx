import React, { useState } from 'react'
import {
  InputBtn,
  InputSelect,
  InputBoxes,
} from '../style/styledComponents/input'
import styled from 'styled-components'

type headerProps = {
  admissionArr: number[]
  onGetDataByInput: (campusName: string, admission: number) => void
}

const HeaderTitle = styled.span`
  font-size: 2rem;
  font-family: Recko;
  color: white;
`

const HeaderInputSelect = styled.select`
  font-size: 0.8rem;
`

const HeaderInputTitle = styled.span`
  margin-right: 0.3rem;
  margin-top: 0.4rem;
  font-weight: 700;
  font-size: 1rem;
  color: white;
`
const HeaderWrap = styled.div`
  position: fixed;
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  width: 100%;
  background: #002a48;
  z-index: 999;
`
const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 770px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media screen and (max-width: 360px) {
    width: 95%;
  }
`

const Header = ({ admissionArr, onGetDataByInput }: headerProps) => {
  const [input, setInput] = useState({
    admission: 0,
    campusName: '',
  })

  const handleInput = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
    console.log(input)
  }

  return (
    <HeaderWrap>
      <HeaderContent>
        <HeaderTitle>한국외대 이중전공 DB</HeaderTitle>
        <InputBoxes>
          <InputSelect>
            <HeaderInputTitle>캠퍼스</HeaderInputTitle>
            <HeaderInputSelect
              className="header-input-select"
              name="campusName"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
                handleInput(e)
              }
            >
              <option value="">캠퍼스 선택</option>
              <option value="seoul">서울</option>
              <option value="global">글로벌</option>
            </HeaderInputSelect>
          </InputSelect>
          <InputSelect>
            <HeaderInputTitle>학번</HeaderInputTitle>
            <HeaderInputSelect
              className="header-input-select"
              name="admission"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
                handleInput(e)
              }
            >
              <option value="">학번 선택</option>
              {admissionArr.map(admission => (
                <option value={admission}>{admission}</option>
              ))}
            </HeaderInputSelect>
          </InputSelect>
          <InputBtn
            onClick={() => {
              const { campusName, admission } = input
              onGetDataByInput(campusName, admission)
            }}
          >
            시작하기
          </InputBtn>
        </InputBoxes>
      </HeaderContent>
    </HeaderWrap>
  )
}

export default Header
