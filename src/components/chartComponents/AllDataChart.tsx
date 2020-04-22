import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/parser'
import ChartTitle from '../ChartTitle'
import ChartSearchCompare from '../ChartSearchCompare'

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
      setSelctedInfo([...selectedInfo, info])
    } else {
      setSelctedInfo(
        [...selectedInfo].filter((major: MajorInfo) => major !== info),
      )
    }
  }

  return (
    <div className="chart">
      <ChartTitle title={'전체보기'} />
      <ChartSearchCompare
        majorData={majorData}
        campusName={campusName}
        selectedInfo={selectedInfo}
        updateSelectedInfo={updateSelectedInfo}
      />
      {majorData
        ? selectedInfo.map((major: MajorInfo) => (
            <div>
              <span>{major.data}</span>
            </div>
          ))
        : null}
    </div>
  )
  //todo <chartTitle 프롭:제목이 될 문자열 />
  //todo <chartSearchCompare 프롭:선택된 메이저 정보들을 배열에 저장, 그 배열을 업데이트 하는 컴포/>
  //todo <chartBarChart 프롭:선택된 메이저 정보들을 배열에 저장 => 보여줘버리기/>
  //todo <chartNotice 프롭:선택된 메이저 정보들을 배열에 저장한 것(필요하면 notice만 후가공해서 프롭으로 넘겨주기) />
}

export default AllDataChart
