import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../@types/parser.d'
import { seoulTheme, globalTheme } from '../config/themes'
import ChartMajorBox from './ChartMajorBox'
import searchTheme from '../utils/searchTheme'

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
  const [themeArr, setThemeArr] = useState<string[]>([])

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
      <div className="chart-search-title"> 테마 선택하기</div>
      {themeArr.map((theme: string) => (
        <span onClick={() => setSelectedThemeInfo(theme)}>
          <ChartMajorBox major={theme} />
        </span>
      ))}
    </div>
  )
}

export default ChartSearchSelect
