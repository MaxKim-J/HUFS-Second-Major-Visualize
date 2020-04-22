// 이중전공 데이터가 포함된 Json의  타입

type MajorInfo = {
  id: number
  name: string
  data: number[]
  classify: string | null
  theme: string | null
  notice: string | null
}

export interface ParsingResult {
  id: number
  campus: string
  admission: number
  major: majorInfo[]
}
