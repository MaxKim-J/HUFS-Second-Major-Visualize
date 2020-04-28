import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/majorData'
import ChartTitle from '../ChartTitle'
import ChartSearchCompare from '../ChartSearchCompare'
import ChartVisualBarChart from '../ChartVisualBarChart'
import ChartNotice from '../ChartNotice'

type AllDataChartProps = {
  majorData: MajorInfo[]
  campusName: string
}

const AllDataChart = ({ majorData, campusName }: AllDataChartProps) => {
  const [selectedInfo, setSelctedInfo] = useState<MajorInfo[]>([])

  useEffect(() => {
    setSelctedInfo([])
  }, [majorData])

  const updateSelectedInfo = (action: string, info: MajorInfo) => {
    if (action === 'set') {
      selectedInfo.length < 3
        ? setSelctedInfo([...selectedInfo, info])
        : alert('학과는 3개까지 선택할 수 있습니다.')
    } else {
      setSelctedInfo(
        [...selectedInfo].filter((major: MajorInfo) => major !== info),
      )
    }
  }

  return (
    <>
      <ChartTitle title={'전체보기'} />
      <ChartSearchCompare
        majorData={majorData}
        campusName={campusName}
        selectedInfo={selectedInfo}
        updateSelectedInfo={updateSelectedInfo}
      />
      <ChartVisualBarChart selectedInfo={selectedInfo} />
      <ChartNotice selectedInfo={selectedInfo} />
    </>
  )
}

export default AllDataChart
