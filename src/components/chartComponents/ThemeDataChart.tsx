import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/majorData'
import ChartTitle from '../ChartTitle'
import ChartVisualBarChart from '../ChartVisualBarChart'
import ChartNotice from '../ChartNotice'
import ChartSearchSelect from '../ChartSearchSelect'

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
          '이중전공 데이터를 테마별로 모아봤습니다. 테마를 선택해 주세요'
        }
      />
      <ChartSearchSelect
        campusName={campusName}
        majorData={majorData}
        updateSelectedThemeInfo={updateSelectedThemeInfo}
      />
      <ChartVisualBarChart selectedInfo={selectedThemeInfo} />
      <ChartNotice selectedInfo={selectedThemeInfo} />
    </>
  )
}

export default ThemeDataChart
