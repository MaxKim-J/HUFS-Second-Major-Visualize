import React, { useState } from 'react'

type headerProps = {
  admissionArr: number[]
  onGetDataByInput: (campusName: string, admission: number) => void
}

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
      <span className="header-title">외대 이중전공 DB</span>
      <span className="header-inputs">
        <span className="header-input">
          <span className="header-input-title">캠퍼스</span>
          <select
            className="header-input-select"
            name="campusName"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
              handleInput(e)
            }
          >
            <option value="">캠퍼스 선택</option>
            <option value="seoul">서울</option>
            <option value="global">글로벌</option>
          </select>
        </span>
        <span className="header-input">
          <span className="header-input-title">학번</span>
          <select
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
          </select>
        </span>
        <span
          className="header-inputs-btn"
          onClick={() => {
            const { campusName, admission } = input
            onGetDataByInput(campusName, admission)
          }}
        >
          확인
        </span>
      </span>
    </>
  )
}

export default Header
