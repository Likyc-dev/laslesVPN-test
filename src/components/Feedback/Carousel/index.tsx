import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import { CustomerCard } from '../FeedbackCard'
import LeftArrowIcon from '../../../assets/images/leftArrow.svg'
import LeftArrowActiveIcon from '../../../assets/images/leftArrowActive.svg'
import RightArrowIcon from '../../../assets/images/rightArrow.svg'
import RightArrowActiveIcon from '../../../assets/images/rightArrowActive.svg'
import MockFeed from '../../../mock/feed.json'

const CarouselContainer = styled.div`
  & .slick-initialized {
    height: inherit;
  }
  & .slick-prev {
    background-image: url(${LeftArrowIcon});
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    position: absolute;
    top: calc(100% + 60px);
    left: 79.5%;
    padding: 12px;
    border: 2px solid #f53838;
    &:before {
      content: '';
    }
    &:active {
      background: #f53838;
      background-image: url(${LeftArrowActiveIcon});
      background-repeat: no-repeat;
      background-position: center;
    }
    &:hover {
      background: #f53838;
      background-image: url(${LeftArrowActiveIcon});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  & .slick-next {
    background-image: url(${RightArrowIcon});
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    position: absolute;
    top: calc(100% + 60px);
    left: 85.5%;
    padding: 12px;
    border: 2px solid #f53838;
    &:before {
      content: '';
    }
    &:hover {
      background: #f53838;
      background-image: url(${RightArrowActiveIcon});
      background-repeat: no-repeat;
      background-position: center;
    }
    &:active {
      background: #f53838;
      background-image: url(${RightArrowActiveIcon});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  & .slick-dots {
    position: absolute;
    top: calc(100% + 60px);
    left: 0;
    text-align: start;
    li {
      width: 15px;
      height: 15px;
      margin: 7px;
      button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #dde0e4;
        border-radius: 7px;
        &:before {
          color: transparent;
        }
      }
    }
    li.slick-active {
      width: 45px;
      height: 15px;
      button {
        width: 45px;
        height: 15px;
        background: #f53838;
        color: red;
      }
    }
  }
`

export const CardCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {MockFeed.map((feed) => (
          <CustomerCard {...feed} />
        ))}
      </Slider>
    </CarouselContainer>
  )
}
