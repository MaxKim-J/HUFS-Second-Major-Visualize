//* searchTheme함수 => theme을 입력하면 이 theme에 해당하는
import { MajorInfo } from '../../@types/majorData'

const searchTheme = (searchFor: string, majorArr: MajorInfo[]) => {
  const result = majorArr.filter((elem: MajorInfo) => {
    return elem.theme === searchFor
  })

  return result
}

export default searchTheme
