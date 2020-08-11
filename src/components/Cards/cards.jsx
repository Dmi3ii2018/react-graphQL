import React from 'react';
import * as Slide from './cards.styles';
import { OfferSlider } from '../slider';
import styled from 'styled-components';

const IconContainer = styled.span`
  color:${({color}) => color || 'rgb(148, 63, 161)'};
  font-size: ${({fontSize}) => fontSize || '28px'};
`;

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
              <IconContainer>
                <i className="far fa-heart" aria-hidden="true"></i>
              </IconContainer>
            </Slide.SpecialContainer>
            <Slide.Location>
            <Slide.HotelName>Kerethium & Astarte {region.id}</Slide.HotelName>
              <Slide.HotelLocation>
                <IconContainer
                  color={'rgb(215, 214, 224)'}
                  fontSize={'16px'}>
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </IconContainer>
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
