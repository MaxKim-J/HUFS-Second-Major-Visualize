import React from 'react'
import ChartTitle from '../chartResourceComponents/ChartTitle'
import { baParsingResult } from '../../../@types/baData'
import BaWithSearchSelect from '../chartResourceComponents/BaWithSearchSelect'
import ChartNotice from '../chartResourceComponents/ChartNotice'
import BaChartAndDetail from '../chartResourceComponents/BaChartAndDetail'
import baNotice from '../../config/baNotice'

type BaDataChartProps = {
  baData: baParsingResult
  onGetBaDataByInput: (semester: string) => void
}

const BaDataChart = ({ baData, onGetBaDataByInput }: BaDataChartProps) => {
  return (
    <>
      <ChartTitle
        title={'경영대학 이중 시험 정보'}
        subTitle={
          '4학기간의 경영대학 경영학전공 이중 필기 시험의 학번별 합격 통계를 조회합니다. 학기를 선택해 주세요.'
        }
      />
      <BaWithSearchSelect onGetBaDataByInput={onGetBaDataByInput} />
      <BaChartAndDetail baData={baData} />
      <ChartNotice
        selectedInfo={baNotice as string[]}
        majorNoticeType={false}
      />
    </>
  )
}

export default BaDataChart
