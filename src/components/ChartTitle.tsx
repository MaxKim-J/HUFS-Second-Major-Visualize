import React from 'react'

type ChartTitleProps = {
  title: string
}

const ChartTitle = ({ title }: ChartTitleProps) => {
  return <div className="chart-title">{title}</div>
}

export default ChartTitle
