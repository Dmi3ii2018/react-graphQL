import React from 'react'
import styled from 'styled-components';

const ArrowSign = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: ${right => right || 'unset'}
  transform: translateY(-50%);
`;

const SvgArrow = styled.svg`
  &:hover {
    background: rgba(0, 0, 0, 0.3);

    & path {
      fill: #fff;
    }
  }
`;

export const ArrowSignLeft = (props) => {
  const { onClick } = props;
  return (
    <ArrowSign
      onClick={onClick}
    >
      <SvgArrow width="40" height="40" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.80605 12.6424L15.9006 20.7342C16.2557 21.0885 16.8312 21.0885 17.1873 20.7342C17.5425 20.3799 17.5425 19.8045 17.1873 19.4502L9.73481 12.0004L17.1864 4.55063C17.5416 4.19635 17.5416 3.62089 17.1864 3.26571C16.8312 2.91143 16.2549 2.91143 15.8997 3.26571L7.80515 11.3575C7.45543 11.7081 7.45543 12.2926 7.80605 12.6424Z" fill="#D7D6E0"/>
      </SvgArrow>
    </ArrowSign>
  );
}

export const ArrowSignRight = (props) => {
  const { onClick } = props;
  return (
    <ArrowSign
      onClick={onClick}
      right={0}
    >
      <SvgArrow width="40" height="40" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.194 12.6424L9.09943 20.7342C8.74425 21.0885 8.1688 21.0885 7.81272 20.7342C7.45754 20.3799 7.45754 19.8045 7.81272 19.4502L15.2652 12.0004L7.81362 4.55063C7.45844 4.19635 7.45844 3.62089 7.81362 3.26571C8.1688 2.91143 8.74515 2.91143 9.10033 3.26571L17.1948 11.3575C17.5446 11.7081 17.5446 12.2926 17.194 12.6424Z" fill="#D7D6E0"/>
      </SvgArrow>

    </ArrowSign>
  );
}
