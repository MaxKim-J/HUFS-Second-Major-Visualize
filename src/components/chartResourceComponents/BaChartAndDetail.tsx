import React, { useState } from 'react'
import { baParsingResult } from '../../../@types/baData'
import ChartWithVisualChart from '../chartResourceComponents/ChartWithVisualChart'
import { BarChartWrap } from '../../style/styledComponents/barChart'
import styled from 'styled-components'

type BaChartDetailProps = {
  baData: baParsingResult
}

const BaDetailContent = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
  margin: 0.5rem 0;
`

const BaDetailContentPart = styled.div`
  width: 25%;
  text-align: center;
`

const BaDetailPartTitle = styled.div`
  @media screen and (max-width: 750px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.2rem;
  }
`

const BaDetailPartContent = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  @media screen and (max-width: 750px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 0.2rem;
  }
`

const BaChartAndDetail = ({ baData }: BaChartDetailProps) => {
  const {
    semester,
    passScore,
    averageScore,
    examPasser,
    examTaker,
    passPerAdmission,
  } = baData
  const passRatio = ((examPasser / examTaker) * 100).toFixed(1)

  return (
    <>
      <ChartWithVisualChart selectedInfo={passPerAdmission} chartType={'ba'} />
      {passPerAdmission ? (
        <BarChartWrap>
          <BaDetailContent>
            <BaDetailContentPart>
              <BaDetailPartTitle>선택학기</BaDetailPartTitle>
              <BaDetailPartContent>{semester}</BaDetailPartContent>
            </BaDetailContentPart>
            <BaDetailContentPart>
              <BaDetailPartTitle>합격점수</BaDetailPartTitle>
              <BaDetailPartContent>{passScore}/60</BaDetailPartContent>
            </BaDetailContentPart>
            <BaDetailContentPart>
              <BaDetailPartTitle>평균점수</BaDetailPartTitle>
              <BaDetailPartContent>{averageScore}/60</BaDetailPartContent>
            </BaDetailContentPart>
            <BaDetailContentPart>
              <BaDetailPartTitle>합격/응시</BaDetailPartTitle>
              <BaDetailPartContent>
                {examPasser}/{examTaker}명
              </BaDetailPartContent>
            </BaDetailContentPart>
            <BaDetailContentPart>
              <BaDetailPartTitle>합격률</BaDetailPartTitle>
              <BaDetailPartContent>{passRatio}%</BaDetailPartContent>
            </BaDetailContentPart>
          </BaDetailContent>
        </BarChartWrap>
      ) : null}
    </>
  )
}

export default BaChartAndDetail
