import React from 'react'

type ChartMajorBoxProps = {
  major: string
  cancelFunction?: (major: string) => void
}

const ChartMajorBox = ({ major, cancelFunction }: ChartMajorBoxProps) => {
  return (
    <span className="chart-major-box">
      <span>{major}</span>
      {cancelFunction ? (
        <span
          className="chart-major-box-close"
          onClick={() => cancelFunction(major)}
        >
          x
        </span>
      ) : null}
    </span>
  )
}

export default ChartMajorBox
