import React, { useState } from 'react'
import { ChartData, ChartDirection } from '../../../@types/barChart'
import { InputBtn } from '../../style/styledComponents/input'

import {
  BarChartWrap,
  BarChartLegend,
  BarChartLegendWrap,
  LegendColorBox,
  ChartBtn,
} from '../../style/styledComponents/barChart'

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

export const MajorChart = ({ direction, chart }: ChartData) => {
  const [chartType, setChartType] = useState<boolean>(true)
  return (
    <BarChartWrap>
      <BarChartLegendWrap>
        {direction.map((bar: ChartDirection, idx: number) => (
          <BarChartLegend key={idx}>
            <LegendColorBox color={bar.color}></LegendColorBox>
            <span>{bar.title}</span>
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
                <Bar key={barIdx} dataKey={bar.title} fill={bar.color} />
              ))
            : direction.map((line: ChartDirection, lineIdx: number) => (
                <Line
                  type="linear"
                  key={lineIdx}
                  dataKey={line.title}
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

export const BaChart = ({ direction, chart }: ChartData) => {
  return (
    <BarChartWrap>
      <BarChartLegendWrap>
        {direction.map((bar: ChartDirection, idx: number) => (
          <BarChartLegend key={idx}>
            <LegendColorBox color={bar.color}></LegendColorBox>
            <span>{bar.title}</span>
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
          <Bar dataKey="합격자" stackId="a" fill="#82ca9d" />
          <Bar dataKey="불합격자" stackId="a" fill="#FFC658" />
          <Line dataKey="응시자" strokeWidth={3} stroke={'#8884D8'} />
        </ComposedChart>
      </ResponsiveContainer>
    </BarChartWrap>
  )
}
