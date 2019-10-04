import React, { useState } from 'react';

import { Label } from 'src/components/TextField/style';

import { Wrapper, StyledTextArea } from './style';

const TextArea = (props) => {
  const {
    id,
    label,
    style,
    labelStyle,
    inputStyle,
    error,
    onChange,
    placeholder,
    value
  } = props;

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (onChange) {
      onChange({ name: id, value });
    }
  };

  return (
    <Wrapper style={style}>
      <Label htmlFor={id} style={labelStyle}>
        {label}
      </Label>
      <StyledTextArea
        autoComplete="off"
        id={id}
        onChange={handleInputChange}
        spellCheck="false"
        value={value}
        error={error}
        rows={4}
        style={inputStyle}
      />
    </Wrapper>
  );
};

export default TextArea;
