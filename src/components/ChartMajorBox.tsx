import React from 'react'
import styled from 'styled-components'
import Emoji from './Emoji'

type ChartMajorBoxProps = {
  major: string
  emoji?: string
  cancelFunction?: (major: string) => void
}

const MajorBox = styled.span`
  padding: 0.2rem 1rem;
  background-color: #f6f9fc;
  border-radius: 20px;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 0.8rem;
  display: block;
  cursor: pointer;
`

const MajorBoxCloseBtn = styled.span`
  margin-left: 1rem;
`

const MajorBoxTitle = styled.span`
  font-size: 0.8rem;
`

const ChartMajorBox = ({
  major,
  emoji,
  cancelFunction,
}: ChartMajorBoxProps) => {
  return (
    <MajorBox>
      {emoji ? <Emoji label="logo" emoji={emoji} /> : null}
      <MajorBoxTitle>{major}</MajorBoxTitle>
      {cancelFunction ? (
        <MajorBoxCloseBtn
          className="chart-major-box-close"
          onClick={() => cancelFunction(major)}
        >
          <Emoji label="cancel" emoji="❌" />
        </MajorBoxCloseBtn>
      ) : null}
    </MajorBox>
  )
}

export default ChartMajorBox
