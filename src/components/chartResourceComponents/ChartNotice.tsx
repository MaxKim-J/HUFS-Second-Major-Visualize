import React from 'react'
import { MajorInfo } from '../../../@types/majorData'
import styled from 'styled-components'

type ChartNoticeProps = {
  selectedInfo: MajorInfo[] | string[]
  majorNoticeType?: boolean
}

const ChartNoticeBox = styled.div`
  padding-top: 1rem;
`

const ChartNoticeContent = styled.div`
  margin-bottom: 1rem;
  @media screen and (max-width: 750px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.7rem;
  }
`

const ChartNoticeTitle = styled.div`
  background-color: #ececec;
  padding: 0.1rem 0.5rem;
  margin-right: 0.8rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0.2rem;
`

const ChartNoticeLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
  margin-top: 1rem;
  border-radius: 50%;
`
const ChartNoticeSection = styled.div`
  margin-bottom: 0.2rem;
  padding-left: 0.5rem;
`

const ChartNotice = ({ selectedInfo, majorNoticeType }: ChartNoticeProps) => {
  return (
    <ChartNoticeBox>
      {majorNoticeType ? (
        <MajorChartNotice noticeResource={selectedInfo as MajorInfo[]} />
      ) : (
        <GeneralChartNotice noticeResource={selectedInfo as string[]} />
      )}
    </ChartNoticeBox>
  )
}

const MajorChartNotice = ({
  noticeResource,
}: {
  noticeResource: MajorInfo[]
}) => {
  return (
    <>
      {noticeResource.map((major: MajorInfo, id: number) =>
        major.notice ? (
          <ChartNoticeContent key={id}>
            <ChartNoticeTitle>{major.name} 지원 유의사항</ChartNoticeTitle>
            <div>
              {major.notice.split('&').map((notice: string, idx: number) => (
                <ChartNoticeSection key={idx}>
                  {idx + 1}. {notice}
                </ChartNoticeSection>
              ))}
            </div>
            <ChartNoticeLine />
          </ChartNoticeContent>
        ) : null,
      )}
    </>
  )
}

const GeneralChartNotice = ({
  noticeResource,
}: {
  noticeResource: string[]
}) => {
  return (
    <>
      <ChartNoticeContent>
        <ChartNoticeTitle>유의사항</ChartNoticeTitle>
        <div>
          {noticeResource.map((notice: string, idx: number) => (
            <ChartNoticeSection key={idx}>
              {idx + 1}. {notice}
            </ChartNoticeSection>
          ))}
        </div>
      </ChartNoticeContent>
    </>
  )
}

export default ChartNotice
