import React from 'react'
import styled from 'styled-components'

type ChartTitleProps = {
  title: string
  subTitle?: string
}

const ChartTitleContent = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
`
const ChartSubTitleContent = styled.div`
  margin-bottom: 1rem;
`

const ChartTitle = ({ title, subTitle }: ChartTitleProps) => {
  return (
    <>
      <ChartTitleContent>{title}</ChartTitleContent>
      <ChartSubTitleContent>{subTitle}</ChartSubTitleContent>
    </>
  )
}

export default ChartTitle
