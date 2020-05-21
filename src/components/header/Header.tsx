import React, { useState } from 'react'
import {
  InputBtn,
  InputSelect,
  InputBoxes,
} from '../../style/styledComponents/input'

import {
  HeaderWrap,
  HeaderContent,
  HeaderInputSelect,
  HeaderInputTitle,
  HeaderTitle,
} from './headerStyledComponents'

import HeaderArrow from './HeaderArrow'

type headerProps = {
  admissionArr: number[]
  onGetDataByInput: (campusName: string, admission: number) => void
  showArrow: Boolean
}

const Header = ({ admissionArr, onGetDataByInput, showArrow }: headerProps) => {
  const [input, setInput] = useState({
    admission: 0,
    campusName: '',
  })

  const handleInput = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  return (
    <HeaderWrap>
      <HeaderContent>
        <HeaderTitle onClick={() => window.location.reload()}>
          한국외대 이중전공 DB
        </HeaderTitle>
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
              {admissionArr.map((admission, idx) => (
                <option key={idx} value={admission}>
                  {admission}
                </option>
              ))}
            </HeaderInputSelect>
          </InputSelect>
          <InputBtn
            onClick={() => {
              const { campusName, admission } = input
              onGetDataByInput(campusName, admission)
            }}
          >
            시작
            {showArrow ? <HeaderArrow /> : null}
          </InputBtn>
        </InputBoxes>
      </HeaderContent>
    </HeaderWrap>
  )
}

export default Header
