import styled from 'styled-components'

export const ChartMajorBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;

  @media screen and (max-width: 770px) {
    width: 90%;
  }

  @media screen and (max-width: 380px) {
    width: 100%;
  }
`
