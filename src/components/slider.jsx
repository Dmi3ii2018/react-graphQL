import React from 'react'
import Slider from "react-slick";
import { ArrowSignLeft, ArrowSignRight } from './arrow-sign';

export const OfferSlider = (props) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowSignLeft />,
    nextArrow: <ArrowSignRight />,
  };

  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  )
}
