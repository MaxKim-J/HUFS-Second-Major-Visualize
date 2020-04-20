import React, { SetStateAction, Dispatch } from 'react'
import { MajorInfo } from '../../@types/parser.d'

//todo theme로직이랑 같이 만들수 있으면 좋겠다

type ChartSearchCompareProps = {
  majorData: MajorInfo[]
  selectedInfo: MajorInfo[]
  setSelectedInfo: (newInfo: MajorInfo) => void
}

// todo : useMajorArr 커스텀 훅 majorInfo[]넣으면
// todo :  useSearch 커스텀 훅 => 인풋으로 정보 지정해주면 해당 majorInfo찾아줌
// todo : useThemeSearch 커스텀 훅 =>

const ChartSearchCompare = ({
  selectedInfo,
  setSelectedInfo,
}: ChartSearchCompareProps) => {
  return <div className="chart-title">dd</div>
}

export default ChartSearchCompare
