export type Introduce = {
  id: number
  title: string
  emoji: string
  contents: string[]
}

export const introduceArr: Introduce[] = [
  {
    id: 0,
    title: '4학기 동안의 이중 변경 여석 데이터를 확인하세요',
    emoji: '📈',
    contents: [
      '지금 당장 변경할 예정이 아니더라도, 확인해보세요!',
      '학기가 지날수록 여석이 늘어나고 있다면 다음 학기에도 여석이 추가될 가능성이 높습니다.',
    ],
  },
  {
    id: 1,
    title: '이중전공 변경 데이터를 그래프로 쉽게 조회하세요',
    emoji: '📊',
    contents: [
      '입력 학번과 캠퍼스에 해당하는 4학기 동안의 이중전공 변경 데이터를',
      '막대그래프로 표현해 손쉽게 확인할 수 있습니다.',
    ],
  },
  {
    id: 2,
    title: '유익한 데이터들도 같이 만나보세요',
    emoji: '✨',
    contents: [
      '이중전공 지원 정보를 정리한 테이블과, 경영학과 이중변경/신청 시험',
      '학번별 합격자 비율(추후 개발 예정) 역시 조회하실 수 있습니다.',
    ],
  },
]
