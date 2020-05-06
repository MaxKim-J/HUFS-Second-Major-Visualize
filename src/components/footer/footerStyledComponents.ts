import styled from 'styled-components'

export const FooterWrap = styled.div`
  width: initial;
  background-color: #f6f9fc;
  padding: 2rem 0;
  border-top: 1px solid #ededed;
`

export const FooterContent = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 750px) {
    width: 90%;
  }

  @media screen and (max-width: 360px) {
    width: 95%;
  }
`

export const FooterIcons = styled.div`
  display: flex;
`

export const FooterIcon = styled.div`
  cursor: pointer;
  margin-right: 0.8rem;
  img {
    width: 2.2rem;
    height: auto;
  }
`

export const FooterCopyrigths = styled.div`
  font-size: 0.5rem;
  margin-top: 0.7rem;
`

export const FooterIntroduce = styled.div`
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  font-weight: bold;
`

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`

export const FooterIntroduceDetail = styled.div`
  font-size: 0.8rem;
`
