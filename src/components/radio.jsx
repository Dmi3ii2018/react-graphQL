import React from 'react';
import { FlexContainer } from './flex-container';
import { Radio } from 'antd';

export const RadioGroup = ({ data, colorHandler, direction = 'row' }) => {
  const colorData = Object.entries(data)

  return (
    <FlexContainer
      as={Radio.Group}
      defaultValue={colorData[0][0]}
      flexDirection={"column"}
      onChange={colorHandler}
      direction={direction}
    >
      {colorData.map(item => <Radio key={item[1]} value={item[0]}>{item[1]}</Radio>)}
    </FlexContainer>
  )
}
