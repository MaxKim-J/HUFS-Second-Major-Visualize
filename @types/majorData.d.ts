// 이중전공 데이터가 포함된 Json의  타입

export type MajorInfo = {
  id: number
  type: 'MajorInfo'
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
