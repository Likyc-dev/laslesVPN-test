import React from 'react'

import {
  ItemBox,
  ItemTitle,
  ItemList,
  ItemSubTitle,
  ItemSelectLink,
} from '../../../UILibrary'
import Figure2 from '../../../assets/images/Illustration1.svg'
import { ReactComponent as Check } from '../../../assets/images/check.svg'
import styled from 'styled-components'

interface ContentItemProps {
  name: string
  descriptions: Array<string>
  price: string
  isSelected: boolean
  index: number
  handleSelected: (value: number) => void
}

export const ContentItem: React.FC<ContentItemProps> = ({
  name,
  descriptions,
  price,
  isSelected,
  index,
  handleSelected,
}) => {
  const styles = isSelected
    ? {
        boxShadow: '0px 30px 30px -20px #ff0000a0',
        background: '#f53838',
        color: 'white',
      }
    : {}

  return (
    <ItemBox style={{ borderColor: `${isSelected ? '#f53838' : '#dddddd'}` }}>
      <div>
        <img src={Figure2} alt="illustration 2" />
        <ItemTitle>{name}</ItemTitle>
        <ItemList>
          {descriptions.map((description) => (
            <li>{description}</li>
          ))}
        </ItemList>
      </div>
      <div>
        <ItemSubTitle>{price}</ItemSubTitle>
        <ItemSelectLink onClick={() => handleSelected(index)} style={styles}>
          Select
        </ItemSelectLink>
      </div>
    </ItemBox>
  )
}
