import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../@types/parser.d'
import { seoulCollege, globalCollege } from '../utils/collegeData'
import updateMajorInput from '../utils/updateMajorInput'
import searchMajor from '../utils/searchMajor'

//todo theme로직이랑 같이 만들수 있으면 좋겠다

type ChartSearchCompareProps = {
  campusName: string
  majorData: MajorInfo[]
  setSelectedInfo: (newInfo: MajorInfo) => void
}

const ChartSearchCompare = ({
  majorData,
  setSelectedInfo,
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

  const updateSelectedInfo = () => {
    const value = input.major
    const selectedInfo = searchMajor(value, majorData)
    setSelectedInfo(selectedInfo as MajorInfo)
    setInput({ college: '', major: '' })
  }

  // todo 인풋은 하나만 만들고 그 아래에 선택한 전공 블럭 만들어주기
  // todo x누르면 블럭 사라지고 배열에서도 삭제되는걸로 => 하이어오더 컴포넌트로 만든다
  return (
    <div className="chart-search">
      <div className="chart-search-title"> 단과대/학과 선택하기</div>
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
              updateSelectedInfo()
            }}
          >
            추가
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default ChartSearchCompare
