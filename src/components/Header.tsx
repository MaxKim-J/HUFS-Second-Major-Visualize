import React, { useState } from 'react'
import { InputBtn, InputSelect } from '../style/styledComponents/input'
import styled from 'styled-components'

type headerProps = {
  admissionArr: number[]
  onGetDataByInput: (campusName: string, admission: number) => void
}

const HeaderTitle = styled.span`
  font-size: 2rem;
  font-family: Recko;
  color: #002a48;
`

const HeaderInputs = styled.div`
  margin-top: 0.4rem;
`

const HeaderInputSelect = styled.select`
  font-size: 0.8rem;
`

const HeaderInputTitle = styled.span`
  margin-right: 0.3rem;
  margin-top: 0.4rem;
  font-weight: 700;
  font-size: 1rem;
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
    <>
      <HeaderTitle>한국외대 이중전공 DB</HeaderTitle>
      <HeaderInputs>
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
          확인
        </InputBtn>
      </HeaderInputs>
    </>
  )
}

export default Header
