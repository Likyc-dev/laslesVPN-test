import React from 'react'
import { SVGProps } from 'react'

import AvatarViezh from '../../../assets/images/viezh.svg'
import StarIcon from '../../../assets/images/star_icon.svg'
import {
  FeedbackCard,
  FeedbackCardTop,
  FeedbackCardTopLeft,
  FeedbackCardContent,
  IconWrapper,
  CardName,
  CardLocation,
  CardRating,
  CardText,
} from '../../../UILibrary'

interface FeedItemProps {
  avatar: string
  customername: string
  customerlocation: string
  rating: number
  text: string
}

export const CustomerCard: React.FC<FeedItemProps> = ({
  avatar,
  customername,
  customerlocation,
  rating,
  text,
}) => {
  console.log(avatar)

  return (
    <FeedbackCard>
      <FeedbackCardTop>
        <img src={AvatarViezh} alt="" />
        <FeedbackCardTopLeft>
          <CardName>{customername}</CardName>
          <CardLocation>{customerlocation}</CardLocation>
        </FeedbackCardTopLeft>
        <CardRating>{rating}</CardRating>
        <IconWrapper>
          <img src={StarIcon} alt="staricon" />
        </IconWrapper>
      </FeedbackCardTop>
      <FeedbackCardContent>
        <CardText>{text}</CardText>
      </FeedbackCardContent>
    </FeedbackCard>
  )
}
