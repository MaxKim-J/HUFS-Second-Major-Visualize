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
  //todo 이외 데이터 표시해주는 새 컴포넌트를 만들어야함 + 이 컴포넌트에서 데이터를 global과 perAdmission으로 나눠 내려주기

  return (
    <>
      <ChartTitle
        title={'경영대학 이중전공 시험 정보'}
        subTitle={
          '4학기간의 경영대학 경영학전공 이중전공 시험의 학번별 합격 통계를 조회합니다. 학기를 선택해 주세요.'
        }
      />
      <BaWithSearchSelect onGetBaDataByInput={onGetBaDataByInput} />
      <ChartVisualBarChart
        selectedInfo={baData.passPerAdmission}
        chartType={'ba'}
      />
    </>
  )
}

export default BaDataChart
