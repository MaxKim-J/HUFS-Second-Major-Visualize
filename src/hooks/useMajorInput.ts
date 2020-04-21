//*  useMajorInput 커스텀 훅 => 인풋: 단과대명(string) => 아웃풋 : 그 단과대에 매치되는 학과명
import { MajorInfo } from '../../@types/parser.d'

const useMajorInput = (college: string, majorArr: MajorInfo[]): string[] => {
  const majors: MajorInfo[] = majorArr.filter(
    (elem: MajorInfo) => elem.classify === college,
  )
  const result: string[] = majors.map((elem: MajorInfo) => elem.name)
  return result
}

export default useMajorInput
