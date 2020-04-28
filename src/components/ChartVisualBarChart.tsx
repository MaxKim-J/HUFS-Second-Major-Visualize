import React, { useState, useEffect } from 'react'
import { MajorInfo, ChartData, ChartDirection } from '../../@types/majorData'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import getChartData from '../utils/getChartData'

type ChartVisualBarChartProps = {
  selectedInfo: MajorInfo[]
}

const ChartVisualBarChart = ({ selectedInfo }: ChartVisualBarChartProps) => {
  const [chartData, setChartData] = useState<ChartData>({
    direction: [],
    chart: [],
  })

  useEffect(() => {
    setChartData(getChartData(selectedInfo))
  }, [selectedInfo])

  const { direction, chart } = chartData

  return (
    <div className="chart-bar-chart">
      <BarChart
        width={600}
        height={300}
        data={chart}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip isAnimationActive={false} />
        {direction.map((bar: ChartDirection) => (
          <Bar dataKey={bar.major} fill={bar.color} />
        ))}
      </BarChart>
    </div>
  )
}

export default ChartVisualBarChart
