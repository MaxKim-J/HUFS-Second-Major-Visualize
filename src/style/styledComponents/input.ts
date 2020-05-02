import styled from 'styled-components'

export const InputBtn = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  background-color: white;
  color: #002a48;
  padding: 0.1rem 0.7rem;
  border-radius: 10px;
  font-weight: 700;
`

export const InputSelect = styled.span`
  margin-right: 10px;
  font-size: 1.3rem;
`
export const InputBoxes = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 770px) {
    justify-content: center;
  }
`
