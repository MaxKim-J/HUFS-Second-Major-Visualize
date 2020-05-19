import React, { useState } from 'react'
import ChartTitle from '../chartResourceComponents/ChartTitle'
import { baParsingResult } from '../../../@types/baData'
import BaWithSearchSelect from '../chartResourceComponents/BaWithSearchSelect'
import ChartVisualBarChart from '../chartResourceComponents/ChartVisualBarChart'
import ChartNotice from '../chartResourceComponents/ChartNotice'

type BaDataChartProps = {
  baData: baParsingResult
  onGetBaDataByInput: (semester: string) => void
}

const BaDataChart = ({ baData, onGetBaDataByInput }: BaDataChartProps) => {
  const [selectedSemester, setSelectedSemester] = useState('')

  console.log(baData)

  //todo 1. selected 컴포넌트는 지금 컴넌 로직을 하이어오더 패턴으로 바꿔서 진행 => baWithSearchSelect
  //todo 2. baWithSearchSelect 컴포넌트에서 학기 정보를 올려보내면 리덕스에서 받은 배열에서 그 학기에 맞는 정보를 찾아주고
  //todo 3. 새로운 ba chart 컴포넌트에 내려준다
  //todo 4. 층이 있는 막대그래프를 출력하는 baChart 컴포넌트 만듬. 데이터 그래프에 맞게 변형시켜주는 함수도 필요
  //todo 5. 이외 데이터 표시해주는 새 컴포넌트를 만들어야함 + 이 컴포넌트에서 데이터를 global과 perAdmission으로 나눠 내려주기

  return (
    <>
      <ChartTitle
        title={'경영대학 이중전공 시험 정보'}
        subTitle={
          '4학기간의 경영대학 이중전공 시험의 학번별 합격 통계를 조회합니다. 학기를 선택해 주세요.'
        }
      />
      <BaWithSearchSelect onGetBaDataByInput={onGetBaDataByInput} />
    </>
  )
}

export default BaDataChart
