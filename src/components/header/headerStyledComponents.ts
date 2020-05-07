import styled from 'styled-components'

export const HeaderTitle = styled.span`
  font-size: 1.5rem;
  font-family: Recko;
  color: white;
`

export const HeaderInputSelect = styled.select`
  font-size: 0.8rem;
`

export const HeaderInputTitle = styled.span`
  margin-right: 0.3rem;
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: white;
`
export const HeaderWrap = styled.div`
  position: fixed;
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  width: 100%;
  background: #002a48;
  z-index: 999;
`
export const HeaderContent = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media screen and (max-width: 360px) {
    width: 95%;
  }
`

export const HeaderArrow = styled.div`
  position: absolute;
  z-index: 999;
  top: 2rem;
  right: 10px;
`
