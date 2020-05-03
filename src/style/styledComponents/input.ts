import styled from 'styled-components'

export const InputBtn = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  background-color: #e2e2e2;
  color: #002a48;
  padding: 0.1rem 0.7rem;
  border-radius: 10px;
  font-weight: 700;
  transition: background-color 1s, box-shadow 1s;
  &:hover {
    background-color: white;
    box-shadow: -1px 14px 5px -8px rgba(0, 0, 0, 0.26);
  }
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
  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`
