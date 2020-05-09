import styled from 'styled-components'

export const ChartMajorBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  transition: background-color 0.8s;

  @media screen and (max-width: 750px) {
    width: 95%;
  }

  @media screen and (max-width: 380px) {
    width: 100%;
  }
`
