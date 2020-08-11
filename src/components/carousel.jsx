import React from 'react';
import Slider from 'react-slick';
import { ArrowSignLeft, ArrowSignRight } from './arrow-sign';
import { OfferCards } from './Cards/cards';

export const Carousel = (props) => {
  const { regionList } = props.data;
  console.log(Boolean(regionList));
  if (!regionList || regionList.length === 0) return null;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <ArrowSignLeft />,
    nextArrow: <ArrowSignRight />,
  };
  return (
    <Slider {...settings}>
      {regionList.map((region) => {
        return (
          <OfferCards key={region.id} data={props.data} />
        )
      })}
    </Slider>
  )
}
