import React from 'react'
import styled from 'styled-components'
import Emoji from '../Emoji'

type ChartMajorBoxProps = {
  major: string
  icon?: string
  cancelFunction?: (major: string) => void
}

const MajorBox = styled.span`
  padding: 0.2rem 1rem;
  background-color: #f6f9fc;
  border-radius: 20px;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 0.8rem;
  display: flex;
  cursor: pointer;
`

const MajorBoxCloseBtn = styled.div`
  margin-left: 1rem;
`

const MajorBoxTitle = styled.div`
  font-size: 0.8rem;
`

const MajorBoxIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.3rem;
  margin-top: 0.1rem;
`

const ChartMajorBox = ({ major, icon, cancelFunction }: ChartMajorBoxProps) => {
  return (
    <MajorBox>
      {icon ? <MajorBoxIcon src={icon} alt={icon} /> : null}
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
