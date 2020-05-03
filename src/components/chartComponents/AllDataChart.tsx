import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/majorData'
import ChartTitle from '../chartResourceComponents/ChartTitle'
import ChartSearchCompare from '../chartResourceComponents/ChartSearchCompare'
import ChartVisualBarChart from '../chartResourceComponents/ChartVisualBarChart'
import ChartNotice from '../chartResourceComponents/ChartNotice'

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
      <ChartTitle
        title={'전체보기'}
        subTitle={
          '선택한 캠퍼스, 학번에 해당하는 이중전공 여석을 조회합니다(비교 학과는 3개까지 선택할 수 있습니다)'
        }
      />
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
