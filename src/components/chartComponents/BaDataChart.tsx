import React from 'react'
import ChartTitle from '../chartResourceComponents/ChartTitle'
import { baParsingResult } from '../../../@types/baData'
import BaSearchSelect from '../chartResourceComponents/chartSearch/BaSearchSelect'
import ChartNotice from '../chartResourceComponents/ChartNotice'
import BaChartDetail from '../chartResourceComponents/BaChartDetail'
import baNotice from '../../config/baNotice'
import MainChart from '../chartResourceComponents/mainCharts/MainChart'

type BaDataChartProps = {
  baData: baParsingResult
  onGetBaDataByInput: (semester: string) => void
}

const BaDataChart = ({ baData, onGetBaDataByInput }: BaDataChartProps) => {
  const { passPerAdmission } = baData

  return (
    <>
      <ChartTitle
        title={'경영대학 이중 시험 정보'}
        subTitle={
          '4학기간의 경영대학 경영학전공 이중 필기 시험의 학번별 합격 통계를 조회합니다. 학기를 선택해 주세요.'
        }
      />
      <BaSearchSelect onGetBaDataByInput={onGetBaDataByInput} />
      <MainChart selectedInfo={passPerAdmission} chartType={'ba'} />
      <BaChartDetail baData={baData} />
      <ChartNotice
        selectedInfo={baNotice as string[]}
        majorNoticeType={false}
      />
    </>
  )
}

export default BaDataChart
