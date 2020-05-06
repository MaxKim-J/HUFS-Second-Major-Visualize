// 이중전공 데이터가 포함된 Json의  타입

export type ChartData = {
  direction: chartDirection[]
  chart: ChartSection[]
}

export type ChartDirection = {
  major: string
  color: string
}

export type ChartSection = {
  name: string
  [chartProp: string]: string | number
}

export type MajorInfo = {
  id: number
  name: string
  data: number[]
  classify: string | null
  theme: string | null
  notice: string | null
}

export type ParsingResult = {
  id: number
  campus: string
  admission: number
  major: majorInfo[]
}
