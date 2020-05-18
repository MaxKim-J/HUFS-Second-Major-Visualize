import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/majorData'
import { seoulTheme, globalTheme } from '../../config/themes'
import searchTheme from '../../utils/searchTheme'
import { ThemeInfo } from '../../config/themes'
import WithSearchSelect from './WithSearchSelect'

type ThemeWithSearchSelectProps = {
  campusName: string
  majorData: MajorInfo[]
  updateSelectedThemeInfo: (themeInfo: MajorInfo[]) => void
}

const ThemeWithSearchSelect = ({
  campusName,
  majorData,
  updateSelectedThemeInfo,
}: ThemeWithSearchSelectProps) => {
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
    <WithSearchSelect
      useIcon={true}
      themeArr={themeArr}
      callFunction={setSelectedThemeInfo}
    />
  )
}

export default ThemeWithSearchSelect
