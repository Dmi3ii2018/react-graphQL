import React from 'react';

export const Input = ({ children, onColorChange }) => {
  return (
    <label>
      <input type='color' onChange={onColorChange} />
      {children}
    </label>
  )
}
