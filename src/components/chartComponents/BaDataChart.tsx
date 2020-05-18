import React, { useState } from 'react'
import ChartTitle from '../chartResourceComponents/ChartTitle'
import { baParsingResult } from '../../../@types/baData'
import ChartSearchCompare from '../chartResourceComponents/ChartSearchCompare'
import ChartVisualBarChart from '../chartResourceComponents/ChartVisualBarChart'
import ChartNotice from '../chartResourceComponents/ChartNotice'

type BaDataChartProps = {
  baData: baParsingResult
  onGetBaDataByInput: (semester: string) => void
}

const BaDataChart = ({ baData, onGetBaDataByInput }: BaDataChartProps) => {
  const [selectedSemester, setSelectedSemester] = useState('')

  //todo baSelect 컴포넌트에서 학기 정보를 올려보내면 배열에서 그 학기에 맞는 정보를 찾아줘야함
  //todo 경영 데이터 표시해주는 새 컴포넌트가 필요
  //todo chart 컴포넌트는 새로 필요함(이분 막대 그래프)
  //todo selected 컴포넌트는 지금 컴넌 로직을 하이어오더 패턴으로 바꿔서 진행
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
