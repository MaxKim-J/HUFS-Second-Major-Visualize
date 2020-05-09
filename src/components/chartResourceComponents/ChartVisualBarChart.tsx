import React, { useState, useEffect } from 'react'
import { MajorInfo, ChartData, ChartDirection } from '../../../@types/majorData'
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from 'recharts'
import getChartData from '../../utils/getChartData'
import styled from 'styled-components'
import { InputBtn } from '../../style/styledComponents/input'

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
  display: flex;
  justify-content: center;
  @media screen and (max-width: 440px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const BarChartLegend = styled.div`
  margin-right: 1rem;
  @media screen and (max-width: 750px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
  }
`
const LegendColorBox = styled.span`
  background-color: ${props => props.color};
  width: 12px;
  height: 12px;
  margin-right: 0.3rem;
  display: inline-block;
  margin-top: 1rem;
`

const ChartBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

const ChartVisualBarChart = ({ selectedInfo }: ChartVisualBarChartProps) => {
  const [chartData, setChartData] = useState<ChartData>({
    direction: [],
    chart: [],
  })
  const [chartType, setChartType] = useState<boolean>(true)

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
        <ComposedChart
          data={chart}
          margin={{ top: 30, right: 30, left: -20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip isAnimationActive={false} />
          {chartType
            ? direction.map((bar: ChartDirection, barIdx: number) => (
                <Bar key={barIdx} dataKey={bar.major} fill={bar.color} />
              ))
            : direction.map((line: ChartDirection, lineIdx: number) => (
                <Line
                  type="linear"
                  key={lineIdx}
                  dataKey={line.major}
                  stroke={line.color}
                  strokeWidth={4}
                  dot={{ strokeWidth: 6 }}
                />
              ))}
        </ComposedChart>
      </ResponsiveContainer>
      <ChartBtn>
        {direction.length > 0 ? (
          <InputBtn onClick={() => setChartType(!chartType)}>
            {chartType ? '꺾은선 그래프로 바꾸기' : '막대 그래프로 바꾸기'}
          </InputBtn>
        ) : null}
      </ChartBtn>
    </BarChartWrap>
  )
}

export default ChartVisualBarChart
