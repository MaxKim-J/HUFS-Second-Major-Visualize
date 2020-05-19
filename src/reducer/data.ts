//! 덕스타입 리덕스
import {
  State,
  Action,
  getDataByInputPayload,
  getBaDataByInputPayload,
} from '../../@types/reducer'
import { ParsingResult } from '../../@types/majorData'
import { baParsingResult } from '../../@types/baData'

//todo 1. 액션 타입 정의
const GETDATABYINPUT = 'data/GETDATABYINPUT' as const
const GETBADATABYINPUT = 'data/GETBADATABYINPUT' as const

//todo 2. 액션 생성함수 정의
export const getDataByInput = (campusName: string, admission: number) => ({
  type: GETDATABYINPUT,
  payload: {
    campusName: campusName,
    admission: admission,
  },
})

export const getBaDataByInput = (semester: string) => ({
  type: GETBADATABYINPUT,
  payload: {
    semester: semester,
  },
})

//todo 3. 초기상태 정의
const initialState: State = {
  majorData: {},
  baData: {},
  campusName: '',
}

//todo 4. 리듀서 작성(export default)
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    //* 1. 헤더에 캠퍼스와 학번을 넣으면 store를 갱신함
    case GETDATABYINPUT:
      const { campusName, admission }: getDataByInputPayload = action.payload
      const target = require(`./data/${campusName}.json`)
      const searchedTarget: ParsingResult = target.find(
        (elem: ParsingResult) => {
          //! 여기 타입 왜이러지
          return elem.admission == admission
        },
      )
      return {
        ...state,
        majorData: searchedTarget,
        campusName: campusName,
      }
    case GETBADATABYINPUT:
      const { semester }: getBaDataByInputPayload = action.payload
      const baTarget = require('./data/ba.json')
      const baData: baParsingResult = baTarget.find((elem: baParsingResult) => {
        return elem.semester === semester
      })
      console.log(baData)
      return {
        ...state,
        baData: baData,
      }
    default:
      return state
  }
}

export default reducer
