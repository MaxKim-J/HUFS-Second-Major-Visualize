import xlsx from 'xlsx'
import {
  xlsxRowData,
  parsingResult,
  parsingTarget,
  majorInfo,
} from '../../@types/parser'
import { defaultAdmissionArr, defaultKeyArr } from './parserConfig'

//* 엑셀 파일 sheet을 바탕으로 parsingTarget 얻는 함수
const parseSheet = (
  fileName: string,
  sheetName: number,
  keyArr: string[] = defaultKeyArr,
): parsingTarget => {
  const filePath = `../../public/${fileName}.xlsx`
  const workbook: xlsx.WorkBook = xlsx.readFile(filePath)
  const sheet: object = workbook.Sheets[sheetName.toString()]
  const sheetArr: xlsxRowData[] = xlsx.utils.sheet_to_json(sheet, {
    header: keyArr,
    range: 1,
  })
  const parsingTarget: parsingTarget = {
    sheetArr: sheetArr,
    sheetName: sheetName,
  }
  return parsingTarget
}

//* parsingTarget을 바탕으로 파싱 완료된 객체를 얻는 함수
const getObjectFromSheet = ({
  sheetArr,
  sheetName,
}: parsingTarget): parsingResult => {
  const majorArr = sheetArr.reduce(
    (result: majorInfo[], current: xlsxRowData) => {
      const { id, major, classify, theme, notice, ...datas } = current
      const majorObject: majorInfo = {
        id: id,
        name: major,
        data: Object.values(datas),
        classify: classify,
        theme: theme || null,
        notice: notice || null,
      }
      return [...result, majorObject]
    },
    [],
  )
  const parsingResult: parsingResult = {
    id: sheetName - 14,
    admission: sheetName,
    major: majorArr,
  }
  return parsingResult
}

//* 학번 파라미터를 바탕으로 파싱 완료된 객체들을 배열에 넣어 리턴한다
export const xlsxParser = (campusName: string): parsingResult[] => {
  const parsingResultArr: parsingResult[] = defaultAdmissionArr.map(admission =>
    getObjectFromSheet(parseSheet(campusName, admission)),
  )
  return parsingResultArr
}
