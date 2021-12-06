import styled from 'styled-components'

export const ItemBoxes = styled.div`
  margin-top: 3.75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.125rem;
`

export const ItemBox = styled.div`
  height: 47.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #dddddd;
  border-radius: 10px;
  align-items: center;
  padding: 5rem 1rem 3.125rem 1rem;
`

export const ItemSelectLink = styled.a`
  display: block;
  padding: 0.8125rem 3.93375rem;
  border: 2px solid #f53838;
  border-radius: 50px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-top: 1.25rem;
  color: #f53838;
  &:hover {
    background: #f53838;
    color: #ffffff;
  }
`
