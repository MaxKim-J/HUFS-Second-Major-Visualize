import React from 'react'
import styled from 'styled-components'

type ChartMajorBoxProps = {
  major: string
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

const ChartMajorBox = ({ major, cancelFunction }: ChartMajorBoxProps) => {
  return (
    <MajorBox>
      <span>{major}</span>
      {cancelFunction ? (
        <span
          className="chart-major-box-close"
          onClick={() => cancelFunction(major)}
        >
          &nbsp; &nbsp; ❌
        </span>
      ) : null}
    </MajorBox>
  )
}

export default ChartMajorBox
