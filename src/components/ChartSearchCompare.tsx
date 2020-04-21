import React, { SetStateAction, Dispatch } from 'react'
import { MajorInfo } from '../../@types/parser.d'

//todo theme로직이랑 같이 만들수 있으면 좋겠다

type ChartSearchCompareProps = {
  majorData: MajorInfo[]
  selectedInfo: MajorInfo[]
  setSelectedInfo: (newInfo: MajorInfo) => void
}

// todo : useMajorInput 커스텀 훅 => 인풋: 단과대명(string) => 아웃풋 : 그 단과대에 매치되는 학과명(자료형 따로 구현)
// todo : useSearch 커스텀 훅 => 인풋 : 학과명(string), majorInfo[] => 아웃풋: 학과명에 매치되는 majorInfo
// todo : useThemeSearch 커스텀 훅 => 인풋 : theme이름, majorInfo[] => 아웃풋: 해당 theme에 해당하는 majorInfo가 들어있는 majorInfo[]

const ChartSearchCompare = ({
  selectedInfo,
  setSelectedInfo,
}: ChartSearchCompareProps) => {
  return <div className="chart-title">dd</div>
}

export default ChartSearchCompare
