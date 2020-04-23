import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../@types/parser.d'
import { seoulCollege, globalCollege } from '../config/colleges'
import updateMajorInput from '../utils/updateMajorInput'
import searchMajor from '../utils/searchMajor'
import ChartMajorBox from './ChartMajorBox'

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
      <div className="chart-search-title"> 단과대/학과 선택하기</div>
      <div className="chart-search-subtitle">
        비교 학과는 3개까지 선택할 수 있습니다
      </div>
      <div className="chart-search-input">
        {/* 단과대 인풋 */}
        <span>
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
            {collegeArr.map((college: string) => (
              <option value={college}>{college}</option>
            ))}
          </select>
        </span>

        {/* 학과 인풋 */}
        <span>
          <select
            className="chart-input-select"
            name="major"
            value={input.major}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
              handleMajorInput(e)
            }
          >
            <option value="">학과선택</option>
            {majorArr.map((major: string) => (
              <option value={major}>{major}</option>
            ))}
          </select>
        </span>
        {input.major ? (
          <span
            className="chart-input-btn"
            onClick={() => {
              setSelectedInfo()
            }}
          >
            추가
          </span>
        ) : null}
      </div>
      {/*학과 박스*/}
      {selectedInfo.map((major: MajorInfo) => (
        <ChartMajorBox major={major.name} cancelFunction={removeSelectedInfo} />
      ))}
    </div>
  )
}

export default ChartSearchCompare
