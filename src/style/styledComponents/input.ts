import styled from 'styled-components'

export const InputBtn = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  background-color: #002a48;
  margin-top: 0.5rem;
  color: white;
  padding: 0.1rem 0.7rem;
  border-radius: 10px;
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
  @media screen and (max-width: 380px) {
    justify-content: space-between;
  }
`
