import React, { useState, useEffect } from 'react'
import { MajorInfo, ChartData, ChartDirection } from '../../../@types/majorData'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import getChartData from '../../utils/getChartData'
import styled from 'styled-components'

type ChartVisualBarChartProps = {
  selectedInfo: MajorInfo[]
}

const BarChartWrap = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f7f7f7;
  margin-top: 1rem;
`
const BarChartLegendWrap = styled.div`
  margin-top: 1rem;
`

const BarChartLegend = styled.span`
  margin-right: 1rem;
`
const LegendColorBox = styled.span`
  background-color: ${props => props.color};
  width: 12px;
  height: 12px;
  margin-right: 0.3rem;
  display: inline-block;
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
      <BarChartLegendWrap>
        {direction.map((bar: ChartDirection, idx: number) => (
          <BarChartLegend>
            <LegendColorBox color={bar.color}></LegendColorBox>
            <span>{bar.major}</span>
          </BarChartLegend>
        ))}
      </BarChartLegendWrap>
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
