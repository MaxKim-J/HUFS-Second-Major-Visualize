//* 선택된 전공 데이터를 차트 컴포넌트가 요구하는 형식으로 바꾸는 함수

import {
  MajorInfo,
  ChartData,
  ChartSection,
  ChartDirection,
} from '../../@types/majorData'
import { semester, chartColor } from '../config/chart'

const chartValueValid = (value: number) => {
  switch (value) {
    case -1: {
      return '데이터 없음'
    }
    case -2: {
      return '제한 없음'
    }
    default: {
      return value
    }
  }
}

const getMajorChartData = (selectedInfo: MajorInfo[]): ChartData => {
  let chartSection: ChartSection[] = []
  let direction: ChartDirection[] = []

  selectedInfo.forEach((major: MajorInfo, idx: number) => {
    direction = [
      ...direction,
      { major: major.name, color: chartColor[idx] } as ChartDirection,
    ]
  })

  semester.forEach((elem: string, idx: number) => {
    chartSection = [...chartSection, { name: elem } as ChartSection]
    selectedInfo.forEach((major: MajorInfo) => {
      chartSection[idx][major.name] = chartValueValid(major.data[idx])
    })
  })

  const result: ChartData = { direction: direction, chart: chartSection }
  return result
}

export default getMajorChartData
