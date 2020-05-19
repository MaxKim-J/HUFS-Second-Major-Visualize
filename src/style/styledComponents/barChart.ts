import styled from 'styled-components'

export const BarChartWrap = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f7f7f7;
  margin-top: 1rem;
`
export const BarChartLegendWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 440px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const BarChartLegend = styled.div`
  margin-right: 1rem;
  @media screen and (max-width: 750px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.6rem;
  }
`
export const LegendColorBox = styled.span`
  background-color: ${props => props.color};
  width: 12px;
  height: 12px;
  margin-right: 0.3rem;
  display: inline-block;
  margin-top: 1rem;
`

export const ChartBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
