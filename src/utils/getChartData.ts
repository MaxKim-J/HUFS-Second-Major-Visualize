//* 선택된 데이터를 차트 컴포넌트가 요구하는 형식으로 바꾸는 함수

import { MajorInfo } from '../../@types/majorData'
import {
  ChartData,
  ChartDirection,
  ChartSection,
  baChartSection,
} from '../../@types/barChart'
import { passPerAdmission } from '../../@types/baData'
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

export const getBaChartData = (selectedInfo: passPerAdmission[]): ChartData => {
  let chartSection: baChartSection[] = []
  let direction: ChartDirection[] = [
    { title: '응시자', color: '#8884D8' },
    { title: '불합격자', color: '#FFC658' },
    { title: '합격자', color: '#82ca9d' },
  ]

  selectedInfo.forEach((admissionInfo: passPerAdmission): void => {
    const { id, admission, examPasser, examTaker } = admissionInfo
    const newSection: baChartSection = {
      id: id,
      name: `${admission}학번`,
      불합격자: examTaker - examPasser,
      합격자: examPasser,
      응시자: examTaker,
    }
    chartSection = [...chartSection, newSection as baChartSection]
  })
  const result: ChartData = { direction: direction, chart: chartSection }
  return result
}

export const getMajorChartData = (selectedInfo: MajorInfo[]): ChartData => {
  let chartSection: ChartSection[] = []
  let direction: ChartDirection[] = []

  selectedInfo.forEach((major: MajorInfo, idx: number) => {
    direction = [
      ...direction,
      { title: major.name, color: chartColor[idx] } as ChartDirection,
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
