import React from 'react'
import { MajorInfo } from '../../@types/parser.d'

type ChartNoticeProps = {
  selectedInfo: MajorInfo[]
}

const ChartNoice = ({ selectedInfo }: ChartNoticeProps) => {
  return (
    <div className="chart-notice">
      {selectedInfo.map((major: MajorInfo) =>
        major.notice ? (
          <div className="chart-notice-content">
            {major.name} 유의사항: {major.notice}
          </div>
        ) : null,
      )}
    </div>
  )
}

export default ChartNoice
