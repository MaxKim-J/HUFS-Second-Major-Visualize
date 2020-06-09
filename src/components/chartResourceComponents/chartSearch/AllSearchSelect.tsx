import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../../@types/majorData'
import { seoulCollege, globalCollege } from '../../../config/colleges'
import updateMajorInput from '../../../utils/updateMajorInput'
import searchMajor from '../../../utils/searchMajor'
import ChartMajorBox from '../ChartMajorBox'
import { ChartMajorBoxes } from '../../../style/styledComponents/majorBoxes'
import {
  InputSelect,
  InputBtn,
  InputBoxes,
} from '../../../style/styledComponents/input'

type ChartSearchCompareProps = {
  campusName: string
  majorData: MajorInfo[]
  selectedInfo: MajorInfo[]
  updateSelectedInfo: (action: string, info: MajorInfo) => void
}

const ChartSearchCompare = ({
  majorData,
  updateSelectedInfo,
  selectedInfo,
  campusName,
}: ChartSearchCompareProps) => {
  const [collegeArr, setCollegeArr] = useState<string[]>([])
  const [majorArr, setMajorArr] = useState<string[]>([])
  const [input, setInput] = useState({
    college: '',
    major: '',
  })

  useEffect(() => {
    if (campusName) {
      campusName === 'seoul'
        ? setCollegeArr(seoulCollege)
        : setCollegeArr(globalCollege)
    }
  }, [campusName])

  const handleMajorInput = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const updateMajorArr = (value: string): void => {
    setMajorArr(updateMajorInput(value, majorData))
  }

  const setSelectedInfo = () => {
    const value = input.major
    const selectedInfo = searchMajor(value, majorData)
    updateSelectedInfo('set', selectedInfo as MajorInfo)
    setInput({ college: '', major: '' })
  }

  const removeSelectedInfo = (major: string) => {
    const selectedInfo = searchMajor(major, majorData)
    updateSelectedInfo('remove', selectedInfo as MajorInfo)
  }

  return (
    <div className="chart-search">
      <InputBoxes>
        {/* 단과대 인풋 */}
        <InputSelect>
          <select
            className="chart-input-select"
            name="college"
            value={input.college}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => {
              handleMajorInput(e)
              updateMajorArr(e.target.value)
            }}
          >
            <option value="">단과대 선택</option>
            {collegeArr.map((college: string, idx: number) => (
              <option key={idx} value={college}>
                {college}
              </option>
            ))}
          </select>
        </InputSelect>

        {/* 학과 인풋 */}
        <InputSelect>
          <select
            className="chart-input-select"
            name="major"
            value={input.major}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
              handleMajorInput(e)
            }
          >
            <option value="">학과선택</option>
            {majorArr.map((major: string, idx: number) => (
              <option key={idx} value={major}>
                {major}
              </option>
            ))}
          </select>
        </InputSelect>
        {input.major ? (
          <InputBtn
            className="chart-input-btn"
            onClick={() => {
              setSelectedInfo()
            }}
          >
            추가
          </InputBtn>
        ) : null}
      </InputBoxes>
      {/*학과 박스*/}
      <ChartMajorBoxes>
        {selectedInfo.map((major: MajorInfo, idx: number) => (
          <ChartMajorBox
            key={idx}
            major={major.name}
            cancelFunction={removeSelectedInfo}
          />
        ))}
      </ChartMajorBoxes>
    </div>
  )
}

export default ChartSearchCompare
