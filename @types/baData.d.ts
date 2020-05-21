export interface passPerAdmission {
  id: number
  type: 'passPerAdmission'
  admission: number
  examTaker: number
  examPasser: number
}

export interface baParsingResult {
  semester: string
  passScore: number
  averageScore: number
  examPasser: number
  examTaker: number
  passPerAdmission: passPerAdmission[]
}
