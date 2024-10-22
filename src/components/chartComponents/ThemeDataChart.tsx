import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/majorData'
import ChartTitle from '../chartResourceComponents/ChartTitle'
import MainChart from '../chartResourceComponents/mainCharts/MainChart'
import ChartNotice from '../chartResourceComponents/ChartNotice'
import ThemeSearchSelect from '../chartResourceComponents/chartSearch/ThemeSearchSelect'

type ThemeDataChartProps = {
  majorData: MajorInfo[]
  campusName: string
}

const ThemeDataChart = ({ majorData, campusName }: ThemeDataChartProps) => {
  const [selectedThemeInfo, setSelctedThemeInfo] = useState<MajorInfo[]>([])

  useEffect(() => {
    setSelctedThemeInfo([])
  }, [majorData])

  const updateSelectedThemeInfo = (themeInfo: MajorInfo[]) => {
    setSelctedThemeInfo(themeInfo)
  }

  return (
    <>
      <ChartTitle
        title={'테마보기'}
        subTitle={
          '캠퍼스별 자주 찾는 이중전공 변경 여석 데이터를 모아봤습니다. 테마를 선택해 주세요'
        }
      />
      <ThemeSearchSelect
        campusName={campusName}
        majorData={majorData}
        updateSelectedThemeInfo={updateSelectedThemeInfo}
      />
      <MainChart selectedInfo={selectedThemeInfo} chartType={'major'} />
      <ChartNotice selectedInfo={selectedThemeInfo} majorNoticeType={true} />
    </>
  )
}

export default ThemeDataChart
