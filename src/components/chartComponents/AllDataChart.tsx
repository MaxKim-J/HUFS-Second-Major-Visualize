import React from 'react'
import { MajorInfo } from '../../../@types/parser'

type AllDataChartProps = {
  majorData: MajorInfo[]
}

const AllDataChart = ({ majorData }: AllDataChartProps) => {
  return (
    <div className="chart">
      {majorData
        ? majorData.map(major => (
            <div>
              <span>{major.id}</span>
              <span>{major.name}</span>
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
