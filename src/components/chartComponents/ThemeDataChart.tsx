import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/parser'
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
    <div className="chart">
      <ChartTitle title={'테마보기'} />
      <ChartSearchSelect
        campusName={campusName}
        majorData={majorData}
        updateSelectedThemeInfo={updateSelectedThemeInfo}
      />
      <ChartVisualBarChart selectedInfo={selectedThemeInfo} />
      <ChartNotice selectedInfo={selectedThemeInfo} />
    </div>
  )
}

export default ThemeDataChart
