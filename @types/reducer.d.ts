// 리덕스에 쓰이는 인터페이스
import { parsingResult } from './majorData'
import { baParsingResult } from '../../@types/baData'

export type State = {
  majorData: parsingResult
  baData: baParsingResult
  campusName: string
}

// 액션값 그대로를 반환하는 타입형
export type Action = ReturnType<typeof getDataByInput | getBaDataByInput>

export type getDataByInputPayload = {
  campusName: string
  admission: number
}

export type getBaDataByInputPayload = {
  semester: string
}
