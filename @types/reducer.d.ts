// 리덕스에 쓰이는 인터페이스
import { parsingResult } from './parser.d'

export type State = {
  majorData: parsingResult
}

// 액션값 그대로를 반환하는 타입형
export type Action = ReturnType<typeof getDataByInput>

export type getDataByInputPayload = {
  campusName: string
  admission: number
}
