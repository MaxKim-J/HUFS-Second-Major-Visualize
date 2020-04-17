// 파서에서 사용하는 인터페이스

export interface xlsxRowData {
  id: number
  major: string
  data0: number
  data1: number
  data2: number
  data3: number
  classify: string
  theme: string
  notice: string
}

export interface majorInfo {
  id: number
  name: string
  data: number[]
  classify: string | null
  theme: string | null
  notice: string | null
}

export interface parsingResult {
  id: number
  admission: number
  major: majorInfo[]
}

export interface parsingTarget {
  sheetArr: xlsxRowData[]
  sheetName: number
}
