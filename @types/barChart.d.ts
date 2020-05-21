export type ChartData = {
  direction: ChartDirection[]
  chart: ChartSection[] | baChartSection[]
}

export type ChartDirection = {
  title: string
  color: string
}

export type ChartSection = {
  name: string
  [chartProp: string]: string | number
}

export type baChartSection = {
  id: number
  name: string
  불합격자: number
  합격자: number
  응시자: number
}
