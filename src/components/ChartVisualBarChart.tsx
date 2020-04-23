import React from 'react'
import { MajorInfo } from '../../@types/parser.d'

type ChartVisualBarChartProps = {
  selectedInfo: MajorInfo[]
}

const ChartVisualBarChart = ({ selectedInfo }: ChartVisualBarChartProps) => {
  return (
    <div>
      {selectedInfo.map((major: MajorInfo) => (
        <div>
          <span>{major.name}</span>
          <span>{major.data}</span>
        </div>
      ))}
    </div>
  )
}

export default ChartVisualBarChart
