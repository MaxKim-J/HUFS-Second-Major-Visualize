import React, { useState, useEffect } from 'react'
import { MajorInfo } from '../../../@types/majorData'
import { ChartData } from '../../../@types/barChart'
import { MajorChart, BaChart } from '../chartResourceComponents/WithVisualChart'
import { getMajorChartData, getBaChartData } from '../../utils/getChartData'
import { passPerAdmission } from '../../../@types/baData'

type ChartVisualBarChartProps = {
  selectedInfo: MajorInfo[] | passPerAdmission[]
  chartType: string
}

const ChartVisualBarChart = ({
  selectedInfo,
  chartType,
}: ChartVisualBarChartProps) => {
  const [chartData, setChartData] = useState<ChartData>({
    direction: [],
    chart: [],
  })

  useEffect(() => {
    if (selectedInfo) {
      const chartData =
        chartType === 'major'
          ? getMajorChartData(selectedInfo as MajorInfo[])
          : getBaChartData(selectedInfo as passPerAdmission[])
      setChartData(chartData)
    }
  }, [selectedInfo, chartType])

  const { direction, chart } = chartData

  return (
    <>
      {chartType === 'major' ? (
        <MajorChart direction={direction} chart={chart} />
      ) : (
        <BaChart direction={direction} chart={chart} />
      )}
    </>
  )
}

export default ChartVisualBarChart
