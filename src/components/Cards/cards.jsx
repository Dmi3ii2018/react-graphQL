import React from 'react';
import * as Slide from './cards.styles';
import { OfferSlider } from '../slider';

export const OfferCards = (props) => {
  const { regionList } = props.data;

  if (!regionList) return null;

  return (
    <Slide.SliderContainer>
      <OfferSlider>
      {regionList.map((region) => {
        return (
          <Slide.ImageContainer key={region.id}>
            <Slide.SpecialContainer>
              <Slide.Special>Идеально для вас</Slide.Special>
              <i>Icon</i>
            </Slide.SpecialContainer>
            <Slide.Location>
            <Slide.HotelName>Kerethium & Astarte {region.id}</Slide.HotelName>
              <Slide.HotelLocation>
                <i>Icon</i>
                <span> {region.name}</span>
              </Slide.HotelLocation>
            </Slide.Location>
          </Slide.ImageContainer>
        )
      })}
      </OfferSlider>
      <Slide.Characteristic>
          <Slide.CharacteristicOption>
            <i>Icon</i>
            <span className="characteristic__number">18 ps</span>
          </Slide.CharacteristicOption>
          <Slide.CharacteristicOption>
            <i>Icon</i>
            <span className="characteristic__number">2bd</span>
          </Slide.CharacteristicOption>
          <Slide.CharacteristicOption>
            <i>Icon</i>
            <span className="characteristic__number">9 ba</span>
          </Slide.CharacteristicOption>
          <Slide.CharacteristicOption>
            <i>Icon</i>
            <span className="characteristic__number">185 m<sup>2</sup></span>
          </Slide.CharacteristicOption>
          <Slide.CharacteristicOption>
            <i>Icon</i>
            <span className="characteristic__number">500 m</span>
          </Slide.CharacteristicOption>
        </Slide.Characteristic>
      <Slide.Hr/>
      <Slide.Booking>
          <Slide.Button>Забронировать</Slide.Button>
          <Slide.BookingInfo>
            <Slide.Price>
              <Slide.RealPrice>2800&#8364;</Slide.RealPrice>
              <Slide.DiscountPrice>2400&#8364;</Slide.DiscountPrice>
              </Slide.Price>
            <Slide.BookingDate>6 ночей, 400 &#8364;/day</Slide.BookingDate>
          </Slide.BookingInfo>
        </Slide.Booking>
    </Slide.SliderContainer>
  );
};
