import React, { useState } from 'react'
import ChartTitle from '../chartResourceComponents/ChartTitle'
import ChartSearchCompare from '../chartResourceComponents/ChartSearchCompare'
import ChartVisualBarChart from '../chartResourceComponents/ChartVisualBarChart'
import ChartNotice from '../chartResourceComponents/ChartNotice'

const BaDataChart = () => {
  const [selectedSemester, setSelctedSemester] = useState('')

  //todo baSelect 컴포넌트에서 학기 정보를 올려보내면 배열에서 그 학기에 맞는 정보를 찾아줘야함

  return (
    <>
      <ChartTitle
        title={'경영대학 이중전공 시험'}
        subTitle={
          '4학기간의 경영대학 이중전공 시험의 학번별 합격 통계를 조회합니다. 학기를 선택해 주세요.'
        }
      />
    </>
  )
}

export default BaDataChart
