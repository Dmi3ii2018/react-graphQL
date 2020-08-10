import React from 'react';
import { Col, Card } from 'antd';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const CustomSlider = styled(Slider)`
//   width: 200px;
//   margin: 0 auto;
//   height: 150px;
// `;

export const Cards = (props) => {
  const { regionList } = props.data;

  if (regionList == null) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides'
  };

  return (
    <div className="sl-container">
      <div className="sl-container__image">
        <div className="special-container">
          <p className="sl-container__special">Идеально для вас</p>
          <i className="sl-container__heart-icon">Icon</i>
        </div>
        <div className="sl-container__location">
          <p className="location sl-container__hotel-name">Kerethium & Astarte</p>
          <p className="location sl-container__hotel-locatione">
            <i className="sl-container__location-icon">Icon</i>
            France, Rouen
          </p>
        </div>
      </div>
      <div className="characteristic">
          <p className="characteristic__option">
            <i>Icon</i>
            <span className="characteristic__number">18 ps</span>
          </p>
          <p className="characteristic__option">
            <i>Icon</i>
            <span className="characteristic__number">2bd</span>
          </p>
          <p className="characteristic__option">
            <i>Icon</i>
            <span className="characteristic__number">9 ba</span>
          </p>
          <p className="characteristic__option">
            <i>Icon</i>
            <span className="characteristic__number">185 m<sup>2</sup></span>
          </p>
          <p className="characteristic__option">
            <i>Icon</i>
            <span className="characteristic__number">500 m</span>
          </p>
        </div>
      <hr className="hor-line" />
      <div className="booking">
          <button className="booking__button">Забронировать</button>
          <div className="booking-info">
            <p className="booking-info__price">
              <span className="booking-info__real-price">2800&#8364;</span>
              <span className="booking-info__discount-price">2400&#8364;</span>
            </p>
            <p className="booking-info__date">6 ночей, 400 &#8364;/day</p>
          </div>
        </div>
    </div>
  );
};
