import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 379px;
  margin: 0 auto;
  box-shadow: rgba(0, 82, 180, 0.1) 0px 10px 50px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 4px 6px 0px, rgba(0, 0, 0, 0.06) 0px 11px 20px 0px, rgba(0, 0, 0, 0.04) 0px 8px 47px 0px;
    transform: translateY(-0.3rem);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 221px;
  background-color: aqua;
  background-image: url("https://villas-dream.com/wp-content/uploads/2017/07/villas-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
`;

export const SpecialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Special = styled.div`
  min-width: 70px;
  background-color: rgb(241, 37, 61);
  color: rgb(255, 255, 255);
  font-size: 12px;
  text-align: center;
  opacity: 0.82;
  padding: 7px 10px;
  margin: 0px;
  border-radius: 12px;
`;

export const Location = styled.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(360deg, rgb(7, 7, 7) -24.34%, rgba(52, 52, 52, 0) 100%);
`;

export const HotelName = styled.p`
  margin-bottom: 0;
`;

export const HotelLocation = styled.p`
  color: rgb(151, 145, 167);
  margin-bottom: 0;
`;

export const Characteristic = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const CharacteristicOption = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(151, 145, 167);
  font-family: Rubik, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
`;

export const Booking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Button = styled.button`
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  color: rgb(148, 63, 161);
  background: transparent;
  padding: 10px 12px;
  margin: 0px;
  transition: all 0.5s ease 0s;
  border: 1px solid rgb(148, 63, 161);
  border-radius: 10px;

  &:hover {
    color: rgb(255, 255, 255);
    cursor: pointer;
    background: rgb(119, 37, 132);
  }
`;

export const BookingInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Price = styled.p`
  margin-bottom: 0;
`;

export const RealPrice = styled.span`
  font-family: Rubik, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  color: rgb(145, 159, 167);
  font-size: 12px;
  line-height: 143%;
  text-align: center;
  margin-right: 6px;
  margin-bottom: 0;
`;

export const DiscountPrice = styled.span`
  font-family: Rubik, Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 128%;
  text-align: right;
  color: rgb(148, 63, 161);
`;

export const BookingDate = styled(RealPrice)`
  text-decoration: line-through;
`;

export const Hr = styled.hr`
  margin: 0 20px;
`;
