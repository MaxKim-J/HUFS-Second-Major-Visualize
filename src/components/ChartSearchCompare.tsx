import React, { useState } from 'react'
import { MajorInfo } from '../../@types/parser.d'

//todo theme로직이랑 같이 만들수 있으면 좋겠다

type ChartSearchCompareProps = {
  majorData: MajorInfo[]
  selectedInfo: MajorInfo[]
  setSelectedInfo: (newInfo: MajorInfo) => void
}

// todo : useThemeSearch 커스텀 훅 => 인풋 : theme이름, majorInfo[] => 아웃풋: 해당 theme에 해당하는 majorInfo가 들어있는 majorInfo[]

const ChartSearchCompare = ({
  majorData,
  selectedInfo,
  setSelectedInfo,
}: ChartSearchCompareProps) => {
  // todo input 태그 담길 state 선언
  const [input, setInput] = useState({
    college: '',
    major: '',
  })

  const handleInput = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
    console.log(input)
  }

  // todo 인풋 옵션 배열 만들고, 단과대 => 학과 순으로 찾을 수 있도록 뿌려주기 이때 인풋태그는 단과대 선택하면 학과가 생기는걸로
  // todo
  return (
    <div className="chart-title">
      여기서 선택해라
      <select>셀렉트태그닷</select>
    </div>
  )
}

export default ChartSearchCompare
