import React, { useState } from 'react'

import { ContentItem } from './ItemBox'
import {
  ContentContainer,
  ContentTitle,
  CommonText,
  ItemBoxes,
  ItemTitle,
  ItemList,
  ItemSubTitle,
  ItemSelectLink,
} from '../../UILibrary'

import MockPlan from '../../mock/plan.json'

export const Content: React.FC = () => {
  const [plans, setPlans] = useState(
    MockPlan.map((plan, index) => {
      return { ...plan, isSelected: index === 0 ? true : false }
    }),
  )

  const handleSelect = (selected: number) => {
    setPlans(
      plans.map((item, index) => {
        return { ...item, isSelected: index === selected ? true : false }
      }),
    )
  }

  return (
    <ContentContainer>
      <ContentTitle>Choose Your Plan</ContentTitle>
      <CommonText>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </CommonText>
      <ItemBoxes>
        {plans.map((plan, index) => (
          <ContentItem
            {...plan}
            key={plan.name}
            index={index}
            handleSelected={handleSelect}
          />
        ))}
      </ItemBoxes>
    </ContentContainer>
  )
}
