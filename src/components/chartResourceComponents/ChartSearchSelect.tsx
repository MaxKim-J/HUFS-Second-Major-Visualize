import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/majorData'
import { seoulTheme, globalTheme } from '../../config/themes'
import ChartMajorBox from './ChartMajorBox'
import searchTheme from '../../utils/searchTheme'
import { ChartMajorBoxes } from '../../style/styledComponents/majorBoxes'
import { ThemeInfo } from '../../config/themes'

type ChartSearchSelectProps = {
  campusName: string
  majorData: MajorInfo[]
  updateSelectedThemeInfo: (themeInfo: MajorInfo[]) => void
}

const ChartSearchSelect = ({
  campusName,
  majorData,
  updateSelectedThemeInfo,
}: ChartSearchSelectProps) => {
  const [themeArr, setThemeArr] = useState<ThemeInfo[]>([])

  useEffect(() => {
    if (campusName) {
      campusName === 'seoul'
        ? setThemeArr(seoulTheme)
        : setThemeArr(globalTheme)
    }
  }, [campusName])

  const setSelectedThemeInfo = (theme: string) => {
    const selectedThemeInfo = searchTheme(theme, majorData)
    updateSelectedThemeInfo(selectedThemeInfo)
  }

  return (
    <div className="chart-search">
      <ChartMajorBoxes>
        {themeArr.map((theme: ThemeInfo) => (
          <span onClick={() => setSelectedThemeInfo(theme.name)}>
            <ChartMajorBox major={theme.name} emoji={theme.emoji} />
          </span>
        ))}
      </ChartMajorBoxes>
    </div>
  )
}

export default ChartSearchSelect
