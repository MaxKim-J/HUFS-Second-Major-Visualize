//* useSearch 커스텀 훅 => 인풋 : 학과명(string), majorInfo[] => 아웃풋: 학과명에 매치되는 majorInfo
import { MajorInfo } from '../../@types/parser.d'

const useSearch = (searchFor: string, majorArr: MajorInfo[]) => {
  const result = majorArr.find((elem: MajorInfo) => {
    return elem.name === searchFor
  })

  return result
}

export default useSearch
