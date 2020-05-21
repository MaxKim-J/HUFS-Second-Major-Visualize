import React from 'react'
import ChartMajorBox from './ChartMajorBox'
import { ChartMajorBoxes } from '../../style/styledComponents/majorBoxes'
import { ThemeInfo } from '../../config/themes'

type WithSearchSelectProps = {
  themeArr: ThemeInfo[]
  callFunction: (name: string) => void
  useIcon: boolean
}

const WithSearchSelect = ({
  themeArr,
  callFunction,
  useIcon,
}: WithSearchSelectProps) => {
  return (
    <div className="chart-search">
      <ChartMajorBoxes>
        {themeArr.map((theme: ThemeInfo, idx: number) => (
          <span key={idx} onClick={() => callFunction(theme.name)}>
            <ChartMajorBox
              major={theme.name}
              icon={useIcon ? theme.icon : null}
            />
          </span>
        ))}
      </ChartMajorBoxes>
    </div>
  )
}

export default WithSearchSelect
