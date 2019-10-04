import React, { useState } from 'react';

import { Wrapper, Label, Input } from './style';

const TextField = (props) => {
  const {
    id,
    label,
    labelStyle,
    inputStyle,
    error,
    onChange,
    placeholder,
    value
  } = props;

  const [focused, setFocused] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (onChange) {
      onChange({ name: id, value });
    }
  };

  const handleBlur = () => {
    if (value) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  return (
    <Wrapper focused={focused}>
      <Label
        htmlFor={id}
        style={labelStyle}
      >
        {label}
      </Label>
      <Input
        autoComplete="off"
        id={id}
        onChange={handleInputChange}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        spellCheck="false"
        value={value}
        error={error}
        style={inputStyle}
      />
    </Wrapper>
  );
};

export default TextField;
