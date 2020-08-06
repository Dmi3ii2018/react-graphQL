import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { FlexContainer } from './flex-container';
import { RadioGroup } from './radio';
import { Logo } from './logo';

const COLOR_TARGET = {
  color: 'Color',
  backgroundColor: 'Background-color'
};

const COLORS = {
  yellow: 'Yellow',
  blue: 'Blue',
  green: 'Green'
}

export const RadioButtonGroup = () => {
  const [isBackgroundColor, changeColorTarget] = useState(false);
  const [chosenTextColor, changeTextColor] = useState();
  const [chosenBackgroundColor, changeBackgroundColor] = useState();

  const onColorChange = (evt) => {
    isBackgroundColor ? changeBackgroundColor(evt.target.value) : changeTextColor(evt.target.value);
  }

  const onColorTargetChange = (evt) => {
    evt.target.value === 'color' ? changeColorTarget(false) : changeColorTarget(true);
  };

  return (
    <FlexContainer
      alignItems={'center'}
      margin={'30px auto'}
      padding={'30px 10px'}
      width={'fit-content'}
      border
    >
      <FlexContainer>
        <RadioGroup
          data={COLOR_TARGET}
          colorHandler={onColorTargetChange}
        />
        <RadioGroup
          data={COLORS}
          colorHandler={onColorChange}
          direction={'column'}
        />
      </FlexContainer>
      <Button
        bg={chosenBackgroundColor}
      >
        <Logo logoColor={chosenTextColor} />
      </Button>
      <Input onColorChange={onColorChange}>Choose your own</Input>
    </FlexContainer>
  )
}
