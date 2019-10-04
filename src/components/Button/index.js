import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledButton,
  StyledPrimaryButton,
  StyledOutlineDangerButton
} from './style';

const handleLinkWrapping = (Component, props) => {
  const { href, to, disabled, isLoading, children, ...rest } = props;

  if (to) {
    return (
      <Component as={Link} to={to} {...rest}>
        {children}
      </Component>
    );
  }

  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  return button;
};

export const Button = (props) => handleLinkWrapping(StyledButton, props);

export const PrimaryButton = (props) =>
  handleLinkWrapping(StyledPrimaryButton, props);

export const OutlineDangerButton = (props) =>
  handleLinkWrapping(StyledOutlineDangerButton, props);
