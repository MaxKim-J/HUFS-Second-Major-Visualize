import styled from 'styled-components'

export const InputBtn = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  background-color: #002a48;
  color: white;
  padding: 0.1rem 0.7rem;
  border-radius: 10px;
  font-weight: 700;
  transition: background-color 0.6s, color 0.6s;
  &:hover {
    background-color: #e2e2e2;
    color: #002a48;
  }
`
export const InputSelect = styled.span`
  margin-right: 10px;
  font-size: 1.3rem;
`
export const InputBoxes = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`
