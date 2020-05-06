import { MajorInfo } from '../../@types/majorData'

const useMajorInput = (college: string, majorArr: MajorInfo[]): string[] => {
  const majors: MajorInfo[] = majorArr.filter(
    (elem: MajorInfo) => elem.classify === college,
  )
  console.log(majors)
  const result: string[] = majors.map((elem: MajorInfo) => elem.name)
  return result
}

export default useMajorInput
