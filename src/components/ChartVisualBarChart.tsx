import React, { useState, useEffect } from 'react'
import { MajorInfo, ChartData, ChartDirection } from '../../@types/majorData'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import getChartData from '../utils/getChartData'
import styled from 'styled-components'

type ChartVisualBarChartProps = {
  selectedInfo: MajorInfo[]
}

const BarChartWrap = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  margin-top: 1rem;
`

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
    <BarChartWrap>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chart}
          margin={{ top: 30, right: 30, left: -20, bottom: 20 }}
          barGap={5}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip isAnimationActive={false} />
          {direction.map((bar: ChartDirection, idx: number) => (
            <Bar key={idx} dataKey={bar.major} fill={bar.color} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </BarChartWrap>
  )
}

export default ChartVisualBarChart
