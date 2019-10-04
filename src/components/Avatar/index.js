import React from 'react';

import { Container } from './style';

const Avatar = (props) => {
  const { name, size = 60 } = props;

  const renderInitials = () => {
    if (!name) {
      return null;
    }
    return name.match(/\b(\w)/g).join('');
  };

  return <Container size={size}>{renderInitials()}</Container>;
};

export default Avatar;
