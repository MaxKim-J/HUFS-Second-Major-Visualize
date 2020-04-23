//* 선택된 전공 데이터를 차트 컴포넌트가 요구하는 형식으로 바꾸는 함수

import { MajorInfo, ChartData } from '../../@types/majorData'
import semester from '../config/semester'

const chartValueValid = (value: number) => {
  switch (value) {
    case -1: {
      return '지원 불가'
    }
    case -2: {
      return '제한 없음'
    }
    default: {
      return value
    }
  }
}

const getMajorChartData = (selectedInfo: MajorInfo[]): ChartData[] => {
  let chartData: ChartData[] = []
  semester.forEach((elem: string, idx: number) => {
    chartData = [...chartData, { name: elem } as ChartData]
    selectedInfo.forEach((major: MajorInfo) => {
      chartData[idx][major.name] = chartValueValid(major.data[idx])
    })
  })
  return chartData
}

export default getMajorChartData
